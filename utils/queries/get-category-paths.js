import client from "utils/prismic";
import * as prismic from "@prismicio/client";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getCategoryPaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "category"),
    lang: "*",
  });

  const data = response.results.map((result) => {
    return {
      params: { slug: [result.uid] },
      locale: localeMap[result.lang],
    };
  });

  for await (const result of response.results) {
    const categoryArticlesResponse = await client.get({
      predicates: [
        prismic.predicate.at("document.type", "article"),
        prismic.predicate.at("my.article.category", result.id),
      ],
      lang: "*",
    });

    const pagesArray = Array.from(
      { length: categoryArticlesResponse.total_pages },
      (_, i) => i + 1
    );

    pagesArray.forEach((e) =>
      data.push({
        params: { slug: [result.uid, "pages", e.toString()] },
        locale: localeMap[result.lang],
      })
    );
  }

  return data;
};

export default getCategoryPaths;
