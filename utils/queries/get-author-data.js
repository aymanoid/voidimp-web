import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getAuthorData = async (username, locale) => {
  const response = await client.getByUID("author", username, {
    lang: localeMap[locale],
  });

  const data = {
    displayName: response.data.display_name,
    avatarThumbnail: response.data.avatar.thumbnail,
    bio: response.data.bio,
  };

  return data;
};

export default getAuthorData;
