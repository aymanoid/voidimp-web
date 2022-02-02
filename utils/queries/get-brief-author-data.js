import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const defaultData = {
  en: {
    displayName: "VoidImp",
    username: "ayman",
    avatarThumbnail: {
      url: "/default_author_avatar.png",
      alt: "Default Author Avatar",
    },
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.",
  },
  ar: {
    displayName: "VoidImp",
    username: "ayman",
    avatarThumbnail: {
      url: "/default_author_avatar.png",
      alt: "صورة الكاتب الإفتراضية",
    },
    bio: "الألم بحد ذاته هو حب الألم ، المشاكل البيئية الرئيسية ، لكني أعطي هذا النوع من الوقت للتراجع ، بحيث يكون هناك بعض الألم والألم العظيمين. حتى رؤساء القوس المنتقمون ليسوا أعضاء ولا. في خوف من لحوم البقر وموت الأسد.",
  },
};

const getBriefAuthorData = async (username, locale) => {
  const response = await client.getByUID("author", username, {
    lang: localeMap[locale],
  });

  const data = {
    displayName: response.data.display_name || defaultData[locale].displayName,
    username: response.uid || defaultData[locale].username,
    avatarThumbnail:
      response.data.avatar.thumbnail || defaultData[locale].avatarThumbnail,
    bio: response.data.bio || defaultData[locale].bio,
  };

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
