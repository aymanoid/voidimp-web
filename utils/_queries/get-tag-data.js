import { fetchAPI } from "utils/api";

const getTagData = async (slug, locale) => {
  const response = await fetchAPI("/tags", {
    filters: {
      slug: `${slug}-${locale}`,
    },
    fields: ["name"],
    locale,
  });

  const data = response.data[0].attributes;

  return data;
};

export default getTagData;
