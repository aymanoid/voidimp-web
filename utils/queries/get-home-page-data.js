import client from "utils/prismic";
import * as prismicH from "@prismicio/helpers";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getHomePageData = async (locale) => {
  const [response, categoriesRes] = await Promise.all([
    client.getSingle("home_page", {
      lang: localeMap[locale],
    }),
    client.getAllByType("category", {
      lang: localeMap[locale],
    }),
  ]);

  const [heroArticleRes, ...featuredArticlesReses] = await Promise.all([
    client.getByUID("article", response.data.hero_article.uid, {
      lang: localeMap[locale],
    }),
    ...response.data.featured_articles.map((e) => {
      return client.getByUID("article", e.article.uid, {
        lang: localeMap[locale],
      });
    }),
  ]);

  const data = {
    heroArticle: {
      slug: heroArticleRes.uid,
      headline: prismicH.asText(heroArticleRes.data.headline),
      subheadline: prismicH.asText(heroArticleRes.data.subheadline),
      mainImage: {
        url: heroArticleRes.data.main_image.url,
        alt: heroArticleRes.data.main_image.alt,
      },
    },
    featuredArticles: featuredArticlesReses.slice(0, 4).map((e) => {
      return {
        slug: e.uid,
        headline: prismicH.asText(e.data.headline),
        subheadline: prismicH.asText(e.data.subheadline),
        mainImage: { url: e.data.main_image.url, alt: e.data.main_image.alt },
        categoryName: categoriesRes.filter(
          (category) => category.uid === e.data.category.uid
        )[0].data.name,
      };
    }),
  };

  return data;
};

export default getHomePageData;
