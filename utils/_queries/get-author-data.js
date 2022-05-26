import { fetchAPI } from "utils/api";

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
  data.avatar = data.avatar.data.attributes;

  return data;
};

export default getAuthorData;
