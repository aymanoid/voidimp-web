import client from "utils/prismic";
import * as prismic from "@prismicio/client";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getAuthorPaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "author"),
    lang: "*",
  });

  const data = response.results.map((result) => {
    return {
      params: { username: [result.uid] },
      locale: localeMap[result.lang],
    };
  });

  for await (const result of response.results) {
    const authorArticlesResponse = await client.get({
      predicates: [
        prismic.predicate.at("document.type", "article"),
        prismic.predicate.at("my.article.author", result.id),
      ],
      lang: "*",
    });

    const pagesArray = Array.from(
      { length: authorArticlesResponse.total_pages },
      (_, i) => i + 1
    );

    pagesArray.forEach((e) =>
      data.push({
        params: { username: [result.uid, "pages", e.toString()] },
        locale: localeMap[result.lang],
      })
    );
  }

  return data;
};

export default getAuthorPaths;
