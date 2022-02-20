import client from "utils/prismic";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getAuthorArticles = async (id, locale, page) => {
  const [response, categoriesRes] = await Promise.all([
    client.get({
      predicates: [
        prismic.predicate.at("document.type", "article"),
        prismic.predicate.at("my.article.author", id),
      ],
      lang: localeMap[locale],
      page: page,
    }),
    client.getAllByType("category", {
      lang: localeMap[locale],
    }),
  ]);

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
    articles: response.results.map((e) => ({
      headline: prismicH.asText(e.data.headline),
      subheadline: prismicH.asText(e.data.subheadline),
      slug: e.uid,
      mainImage: { url: e.data.main_image.url, alt: e.data.main_image.alt },
      postDate: e.data.post_date || e.first_publication_date,
      categoryData: {
        slug: categoriesRes.filter(
          (category) => category.uid === e.data.category.uid
        )[0].uid,
        name: categoriesRes.filter(
          (category) => category.uid === e.data.category.uid
        )[0].data.name,
      },
    })),
  };

  return data;
};

export default getAuthorArticles;
