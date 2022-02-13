import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const defaultData = {
  en: {
    displayName: "No Display Name",
    avatar: {
      url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
      alt: "Author Avatar",
    },
    bio: "No bio has been set.",
  },
  ar: {
    displayName: "لا يوجد اسم عرض",
    avatar: {
      url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
      alt: "صورة الكاتب",
    },
    bio: "لم يتم تعيين السيرة الذاتية.",
  },
};

const getAuthorData = async (username, locale) => {
  let data;
  try {
    const response = await client.getByUID("author", username, {
      lang: localeMap[locale],
    });

    data = {
      id: response.id,
      displayName:
        response.data.display_name || defaultData[locale].displayName,
      avatar: response.data.avatar || defaultData[locale].avatar,
      bio: response.data.bio || defaultData[locale].bio,
    };
  } catch {
    data = defaultData[locale];
  }

  delete data.avatar.dimensions;

  return data;
};

export default getAuthorData;
