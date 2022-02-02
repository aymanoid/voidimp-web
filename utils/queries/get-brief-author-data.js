import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getBriefAuthorData = async (username, locale) => {
  const response = await client.getByUID("author", username, {
    lang: localeMap[locale],
  });

  const data = {
    displayName: response?.data?.display_name,
    username: response?.uid,
    pfpThumbnail: response?.data?.profile_picture.thumbnail,
    bio: response?.data?.bio,
  };

  return data;
};

export default getBriefAuthorData;
