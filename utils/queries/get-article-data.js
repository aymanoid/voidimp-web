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
  //console.log(response.data.body[0].primary);

  const data = {
    headline: prismicH.asText(response.data.headline),
    subheadline: prismicH.asText(response.data.subheadline),
    mainImage: response.data.main_image,
    displayAuthor: response.data.display_author,
    postDate: response.first_publication_date,
    updateDate: response.last_publication_date,
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
  };
  //console.log(data.body);
  if (data.displayAuthor) {
    const authorResponse = await client.getByUID(
      "author",
      response.data.author.uid,
      {
        lang: localeMap[locale],
      }
    );

    console.log(authorResponse);
    data.author = {
      displayName: authorResponse?.data?.display_name,
      username: authorResponse?.uid,
      pfpThumbnail: authorResponse?.data?.profile_picture.thumbnail,
      bio: authorResponse?.data?.bio,
    };
  }
  return data;
};

export default getArticleData;
