import client from "utils/prismic";
import * as prismic from "@prismicio/client";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getArticlePaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "article"),
    lang: "*",
  });

  const data = response.results.map((result) => {
    return { params: { slug: result.uid }, locale: localeMap[result.lang] };
  });
  return data;
};

export default getArticlePaths;
