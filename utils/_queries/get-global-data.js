import { fetchAPI } from "utils/api";
import { deepLog, hashIds } from "utils/helpers";

const getGlobalData = async (locale) => {
  const response = await fetchAPI("/global", {
    populate: {
      header: {
        populate: "*",
      },
      footer: {
        populate: ["footerColumns", "footerColumns.links"],
      },
      socialNetworks: {
        populate: "*",
      },
      seo: {
        fields: ["metaTitle", "metaDescription"],
        populate: {
          metaImage: {
            fields: ["alternativeText", "caption", "url", "width", "height"],
          },
        },
      },
    },
    locale,
  });

  const data = response.data.attributes;
  data.seo.metaImage = data.seo.metaImage.data.attributes;

  deepLog(hashIds(data));

  return hashIds(data);
};

export default getGlobalData;
