import { fetchAPI, getCmsMedia } from "utils/api";
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
  };

  const response = await fetchAPI("/articles", {
    filters: filtersMap[collectionType],
    pagination: {
      page: currPage,
      pageSize: 10,
    },
    fields: [
      "headline",
      "subheadline",
      "slug",
      "updatedAt",
      "publishedAt",
      "manualPublishedAt",
    ],
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
        publishedAt: e.attributes.manualPublishedAt || e.attributes.publishedAt,
        mainImage: {
          ...e.attributes.mainImage.data.attributes,
          url: getCmsMedia(e.attributes.mainImage.data.attributes.url),
        },
        category: e.attributes.category.data.attributes,
      };

      delete obj.manualPublishedAt;

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

  console.log(
    require("util").inspect(unlocalizeSlugs(data, locale), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );

  return unlocalizeSlugs(data, locale);
};

export default getListedArticlesData;
