import { fetchAPI } from "utils/api";

const getPathsData = async (collectionType) => {
  const response = await fetchAPI(`/${collectionType}`, {
    fields: ["slug", "locale"],
    locale: "all",
  });

  const paths = response.data.map((element) => ({
    params: {
      slug: element.attributes.slug.replace(
        `-${element.attributes.locale}`,
        ""
      ),
    },
    locale: element.attributes.locale,
  }));
  return paths;
};

export default getPathsData;
