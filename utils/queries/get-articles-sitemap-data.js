import client from "utils/prismic";
import * as prismic from "@prismicio/client";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getArticlesSitemapData = async () => {
  /*const response = await client.get({
    predicates: prismic.predicate.at("document.type", "article"),
    lang: "*",
  });*/

  const response = await client.getAllByType("article");

  console.log(response[0].alternate_languages);
  const data = response.map((result) => {
    return {
      slug: result.uid,
      ar:
        result.alternate_languages.length !== 0 &&
        result.alternate_languages[0].lang === "ar-ma",
    };
  });
  return data;
};

export default getArticlesSitemapData;
