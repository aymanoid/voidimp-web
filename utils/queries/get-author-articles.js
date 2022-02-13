import client from "utils/prismic";
import * as prismic from "@prismicio/client";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getAuthorArticles = async (username, locale, page) => {
  const response = await client.get({
    predicates: [
      prismic.predicate.at("document.type", "article"),
      prismic.predicate.at("my.article.author", username),
    ],
    lang: localeMap[locale],
    page: page,
  });

  console.log(response);
  const data = {
    paginationData: {
      page: response.page,
      resultsPerPage: response.results_per_page,
      resultsSize: response.results_size,
      totalResultsSize: response.total_results_size,
      totalPages: response.total_pages,
      nextPage: response.next_page,
      prevPage: response.prev_page,
    },
  };

  return data;
};

export default getAuthorArticles;
