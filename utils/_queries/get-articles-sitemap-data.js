import { fetchAPI } from "utils/api";
import { unlocalizeSlugs } from "utils/helpers";

const getArticlesSitemapData = async (slug, locale) => {
  const response = await fetchAPI("/articles", {
    locale: "en",
    fields: ["slug", "locale"],
    populate: { localizations: { fields: ["locale"] } },
  });

  const data = response.data.map((result) => {
    return {
      slug: unlocalizeSlugs(result.attributes, result.attributes.locale).slug,
      ar:
        result.attributes.localizations.data.length !== 0 &&
        result.attributes.localizations.data[0].attributes.locale === "ar",
    };
  });

  return data;
};

export default getArticlesSitemapData;
