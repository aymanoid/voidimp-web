import { fetchAPI } from "utils/api";

const cleanse = (data) => {
  const { header, footer, common } = data.data.attributes;

  return { header, footer, common };
};

const getGlobalData = async (locale) => {
  const data = await fetchAPI("/global", {
    populate: {
      header: {
        populate: "*",
      },
      footer: {
        populate: ["footerColumns", "footerColumns.links"],
      },
      common: {
        populate: "*",
      },
    },
    locale,
  });

  return cleanse(data);
};

export default getGlobalData;
