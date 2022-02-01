import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const get404PageData = async (locale) => {
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

export default get404PageData;
