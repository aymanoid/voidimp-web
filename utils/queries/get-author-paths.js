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
    return { params: { username: result.uid }, locale: localeMap[result.lang] };
  });
  return data;
};

export default getAuthorPaths;
