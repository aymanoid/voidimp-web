import { fetchAPI } from "utils/api";
import { unlocalizeSlugs, hashIds } from "utils/helpers";

// TODO: use something like google analytics to get this data dynamically
const getRelatedArticlesData = async (slug, locale) => {
  const promises = [
    fetchAPI("/articles", {
      filters: {
        slug: {
          $ne: `${slug}-${locale}`,
        },
      },
      fields: ["slug", "headline"],
      populate: {
        mainImage: {
          fields: ["url", "alternativeText"],
        },
      },
      locale,
    }),
    fetchAPI("/home-page", {
      populate: {
        featuredArticles: {
          populate: {
            featuredArticle: {
              fields: ["slug", "headline", "subheadline"],
              populate: {
                mainImage: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
      },
      locale,
    }),
  ];

  const responses = await Promise.all(promises);

  const latestArticles = responses[0].data.map((e) => ({
    ...e.attributes,
    mainImage: e.attributes.mainImage.data.attributes,
  }));
  let { featuredArticles } = responses[1].data.attributes;
  featuredArticles = featuredArticles.map((e) => ({
    ...e.featuredArticle.data.attributes,
    mainImage: e.featuredArticle.data.attributes.mainImage.data.attributes,
  }));

  return hashIds(unlocalizeSlugs({ latestArticles, featuredArticles }, locale));
};

export default getRelatedArticlesData;
