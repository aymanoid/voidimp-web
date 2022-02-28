import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getMultipleTagsData = async (tags, locale) => {
  const promises = tags.map((e) =>
    client.getByUID("tag", e, {
      lang: localeMap[locale],
    })
  );

  const responses = await Promise.all(promises);

  const data = responses.map((e) => {
    return { name: e.data.name, id: e.uid };
  });

  return data;
};

export default getMultipleTagsData;
