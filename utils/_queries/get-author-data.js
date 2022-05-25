import { fetchAPI, getCmsMedia } from "utils/api";

const getAuthorData = async (slug, locale) => {
  const response = await fetchAPI("/authors", {
    filters: {
      slug: `${slug}-${locale}`,
    },
    fields: ["displayName", "bio"],
    populate: {
      avatar: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
    locale,
  });

  const data = response.data[0].attributes;
  data.avatar = {
    ...data.avatar.data.attributes,
    url: getCmsMedia(data.avatar.data.attributes.url),
  };

  /*
  console.log(
    require("util").inspect(data, {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );*/

  return data;
};

export default getAuthorData;
