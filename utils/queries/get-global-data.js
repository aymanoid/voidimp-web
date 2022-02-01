import client from "utils/prismic";

const localeMap = {
  en: "en-us",
  ar: "ar-ma",
  "en-us": "en",
  "ar-ma": "ar",
};

const getGlobalData = async (locale) => {
  const response = await client.getSingle("global", {
    lang: localeMap[locale],
  });

  const data = {
    searchBarLabel: response.data.search_bar_label,
    navbarLinks: response.data.navbar_links,
    footerDescription: response.data.footer_description,
    footerLinkColumns: response.data.body
      .filter((e) => e.slice_type === "footer_links_column")
      .map((e) => ({ title: e.primary.title, links: e.items })),
    footerRights: response.data.footer_rights,
    socialLinks: response.data.social_links,
  };
  return data;
};

export default getGlobalData;