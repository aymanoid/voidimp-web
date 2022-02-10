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
    username: "default",
    avatarThumbnail: {
      url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
      alt: "Author Avatar",
      dimensions: { width: 128, height: 128 },
    },
    bio: "No bio has been set.",
  },
  ar: {
    displayName: "لا يوجد اسم عرض",
    username: "default",
    avatarThumbnail: {
      url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
      alt: "صورة الكاتب",
      dimensions: { width: 128, height: 128 },
    },
    bio: "لم يتم تعيين السيرة الذاتية.",
  },
};

const getBriefAuthorData = async (username, locale) => {
  let data;
  try {
    const response = await client.getByUID("author", username, {
      lang: localeMap[locale],
    });

    data = {
      displayName:
        response.data.display_name || defaultData[locale].displayName,
      username: response.uid || defaultData[locale].username,
      avatarThumbnail:
        response.data.avatar.thumbnail || defaultData[locale].avatarThumbnail,
      bio: response.data.bio || defaultData[locale].bio,
    };
  } catch {
    data = defaultData[locale];
  }

  if (data.bio.length > 128) {
    let trimmedString = data.bio.substr(0, 128);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    data.bio = { text: trimmedString, long: true };
  }

  return data;
};

export default getBriefAuthorData;
