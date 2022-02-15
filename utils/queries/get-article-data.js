import client from "utils/prismic";
import * as prismicH from "@prismicio/helpers";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getArticleData = async (slug, locale) => {
  const response = await client.getByUID("article", slug, {
    lang: localeMap[locale],
  });

  const data = {
    headline: prismicH.asText(response.data.headline),
    subheadline: prismicH.asText(response.data.subheadline),
    mainImage: response.data.main_image,
    authorUsername: response.data.author.uid,
    postDate: response.data.post_date || response.first_publication_date,
    updateDate: response.data.update_date || response.last_publication_date,
    segments: response.data.body?.map((e) => {
      const type = e.slice_type;
      let primary;
      switch (type) {
        case "text":
          primary = prismicH.asHTML(e.primary.text);
          break;
        case "image":
          primary = {
            dimensions: e.primary.image.dimensions,
            alt: e.primary.image.alt,
            copyright: e.primary.image.copyright,
            url: e.primary.image.url,
            caption: prismicH.asHTML(e.primary.caption),
          };
          break;
        default:
          primary = e.primary;
      }
      return {
        type,
        primary,
      };
    }),
    tags: response.data.tags.map((e) => e.tag.uid),
    category: response.data.category.uid,
    description: response.data.description,
  };

  return data;
};

export default getArticleData;
