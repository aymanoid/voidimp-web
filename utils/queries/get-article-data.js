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

  let enResponse;
  if (locale === "ar") {
    enResponse = await client.getByUID("article", slug, {
      lang: "en-us",
    });
  }

  const data = {
    headline: prismicH.asText(response.data.headline),
    subheadline: prismicH.asText(response.data.subheadline),
    mainImage: response.data.main_image,
    authorUsername: response.data.author.uid,
    postDate: response.data.post_date || response.first_publication_date,
    updateDate: response.data.update_date || response.last_publication_date,
    segments: response.data.body?.map((e, i) => {
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
        case "timeline":
          primary = e.items.map((e, x) => {
            const obj = {
              title: e.title,
              direction: e.direction,
              note: e.note,
            };
            if (locale === "ar")
              obj.enTitle = enResponse.data.body[i].items[x].title;
            return obj;
          });
          break;
        default:
          primary = e.primary;
      }
      return {
        type,
        primary,
      };
    }),
    tags: response.data.tags.length
      ? response.data.tags.map((e) => e.tag.uid)
      : [],
    category: response.data.category.uid,
    description: response.data.description,
  };

  return data;
};

export default getArticleData;
