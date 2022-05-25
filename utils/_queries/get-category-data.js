import { fetchAPI } from "utils/api";

const getCategoryData = async (slug, locale) => {
  const response = await fetchAPI("/categories", {
    filters: {
      slug: `${slug}-${locale}`,
    },
    fields: ["name"],
    locale,
  });

  const data = response.data[0].attributes;

  return data;
};

export default getCategoryData;
