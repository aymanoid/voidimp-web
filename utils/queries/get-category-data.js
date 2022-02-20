import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getCategoryData = async (id, locale) => {
  const response = await client.getByUID("category", id, {
    lang: localeMap[locale],
  });

  const data = {
    id: response.id,
    name: response.data.name,
  };
  return data;
};

export default getCategoryData;
