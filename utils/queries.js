import client from "utils/prismic";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

export const getGlobalData = async (locale) => {
  const response = await client.getSingle("global", {
    lang: localeMap[locale],
  });

  const data = {
    searchBarLabel: response.data.search_bar_label,
    navbarLinks: response.data.navbar_links,
    footerDescription: response.data.footer_description,
    footerLinkColumns: response.data.body
      .filter((e) => e.slice_type === "footer_links_column")
      .map((e) => ({ title: e.primary.title, links: e.items })),
    footerRights: response.data.footer_rights,
    socialLinks: response.data.social_links,
  };
  return data;
};

export const get404PageData = async (locale) => {
  const response = await client.getSingle("404_page", {
    lang: localeMap[locale],
  });

  const data = {
    seoData: {
      title: response.data.seo_title,
    },
    pageData: {
      firstText: response.data.first_text,
      secondText: response.data.second_text,
      backButton: response.data.back_button,
    },
  };
  return data;
};

export const getArticleData = async (slug, locale) => {
  const response = await client.getByUID("article", slug, {
    lang: localeMap[locale],
  });

  const data = {
    headline: prismicH.asText(response.data.headline),
    subheadline: prismicH.asText(response.data.subheadline),
    mainImage: response.data.main_image,
    displayAuthor: response.data.display_author,
    postDate: response.first_publication_date,
    updateDate: response.last_publication_date,
  };

  if (data.displayAuthor) {
    const authorResponse = await client.getByUID(
      "author",
      response.data.author.uid,
      {
        lang: localeMap[locale],
      }
    );

    data.author = {
      displayName: authorResponse.data.display_name,
      username: authorResponse.uid,
      pfpThumbnail: authorResponse.data.profile_picture.thumbnail,
    };
  }
  return data;
};

export const getArticlePaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "article"),
    lang: "*",
  });

  const data = response.results.map((result) => {
    return { params: { slug: result.uid }, locale: localeMap[result.lang] };
  });
  return data;
};
