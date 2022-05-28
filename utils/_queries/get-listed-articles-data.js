import { fetchAPI } from "utils/api";
import { unlocalizeSlugs } from "utils/helpers";

const getListedArticlesData = async (
  slug,
  locale,
  currPage,
  collectionType
) => {
  const filtersMap = {
    author: {
      author: {
        slug: {
          $eq: `${slug}-${locale}`,
        },
      },
    },
    category: {
      category: {
        slug: {
          $eq: `${slug}-${locale}`,
        },
      },
    },
    tag: {
      tags: {
        slug: {
          $eq: `${slug}-${locale}`,
        },
      },
    },
  };

  const response = await fetchAPI("/articles", {
    filters: filtersMap[collectionType],
    sort: ["publishedAt:desc"],
    pagination: {
      page: currPage,
      pageSize: 10,
    },
    fields: ["headline", "subheadline", "slug", "updatedAt", "publishedAt"],
    populate: {
      mainImage: {
        fields: ["url", "alternativeText"],
      },
      category: {
        fields: ["name", "slug"],
      },
    },
    locale,
  });

  const data = {
    ...response,
    data: response.data.map((e) => {
      const obj = {
        ...e.attributes,
        mainImage: e.attributes.mainImage.data.attributes,
        category: e.attributes.category.data.attributes,
      };

      return obj;
    }),
    pagination: response.meta.pagination,
  };

  delete data.meta;

  data.pagination.prevPage =
    data.pagination.page - 1 <= 0 ? null : data.pagination.page - 1;
  data.pagination.nextPage =
    data.pagination.page + 1 > data.pagination.pageCount
      ? null
      : data.pagination.page + 1;

  return unlocalizeSlugs(data, locale);
};

export default getListedArticlesData;
