import { fetchAPI, getCmsMedia } from "utils/api";
import { unlocalizeSlugs, hashIds } from "utils/helpers";

const getAuthorArticlesData = async (slug, locale, currPage) => {
  const response = await fetchAPI("/articles", {
    filters: {
      author: {
        slug: {
          $eq: `${slug}-${locale}`,
        },
      },
    },
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

export default getAuthorArticlesData;
