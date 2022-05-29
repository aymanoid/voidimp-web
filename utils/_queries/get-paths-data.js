import { fetchAPI } from "utils/api";
import { unlocalizeSlugs } from "utils/helpers";

const getPathsData = async (collectionType, paged = false) => {
  const response = await fetchAPI(`/${collectionType}`, {
    fields: ["slug", "locale"],
    locale: "all",
  });

  const data = response.data.map((e) => ({
    ...unlocalizeSlugs(e.attributes, e.attributes.locale),
  }));

  const paths = data.map((e) => ({
    params: {
      slug: paged ? [e.slug] : e.slug,
    },
    locale: e.locale,
  }));

  if (paged) {
    for await (const result of data) {
      const filtersMap = {
        authors: {
          author: {
            slug: {
              $eq: `${result.slug}-${result.locale}`,
            },
          },
        },
        categories: {
          category: {
            slug: {
              $eq: `${result.slug}-${result.locale}`,
            },
          },
        },
        tags: {
          tags: {
            slug: {
              $eq: `${result.slug}-${result.locale}`,
            },
          },
        },
      };

      const authorArticlesRes = await fetchAPI("/articles", {
        filters: filtersMap[collectionType],
        pagination: {
          pageSize: 10,
        },
        locale: "all",
      });

      const pagesArray = Array.from(
        { length: authorArticlesRes.meta.pagination.pageCount },
        (_, i) => i + 1
      );

      pagesArray.forEach((e) =>
        paths.push({
          params: { slug: [result.slug, "pages", e.toString()] },
          locale: result.locale,
        })
      );
    }
  }

  return paths;
};

export default getPathsData;
