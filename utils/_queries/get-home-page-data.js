import { fetchAPI } from "utils/api";
import { unlocalizeSlugs, hashIds } from "utils/helpers";

const getHomePageData = async (locale) => {
  const response = await fetchAPI("/home-page", {
    populate: {
      heroArticle: {
        fields: ["slug", "headline", "subheadline"],
        populate: {
          mainImage: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      featuredArticles: {
        populate: {
          featuredArticle: {
            fields: ["slug", "headline", "subheadline"],
            populate: {
              mainImage: {
                fields: ["url", "alternativeText"],
              },
              category: {
                fields: ["name"],
              },
            },
          },
        },
      },
      trendingArticles: {
        populate: {
          trendingArticle: {
            fields: ["slug", "headline"],
            populate: {
              mainImage: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      seo: {
        populate: {
          metaImage: { fields: ["alternativeText", "url", "width", "height"] },
        },
      },
    },
    locale,
  });

  const data = response.data.attributes;

  data.heroArticle = data.heroArticle.data.attributes;
  data.heroArticle.mainImage = data.heroArticle.mainImage.data.attributes;
  data.featuredArticles = data.featuredArticles.map((e) => ({
    ...e.featuredArticle.data.attributes,
    mainImage: e.featuredArticle.data.attributes.mainImage.data.attributes,
    category: e.featuredArticle.data.attributes.category.data.attributes,
  }));
  data.trendingArticles = data.trendingArticles.map((e) => ({
    ...e.trendingArticle.data.attributes,
    mainImage: e.trendingArticle.data.attributes.mainImage.data.attributes,
  }));

  data.seo.metaImage = data.seo.metaImage.data.attributes;

  delete data.createdAt;
  delete data.updatedAt;
  delete data.publishedAt;
  delete data.locale;

  return hashIds(unlocalizeSlugs(data, locale));
};

export default getHomePageData;
