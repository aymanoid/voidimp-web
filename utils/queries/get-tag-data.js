import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getTagData = async (slug, locale) => {
  const response = await client.getByUID("tag", slug, {
    lang: localeMap[locale],
  });

  console.log(response);
  const data = {
    id: response.id,
    name: response.data.name,
  };
  return data;
};

export default getTagData;
