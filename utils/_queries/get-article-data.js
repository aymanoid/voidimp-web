import { fetchAPI } from "utils/api";
import { unlocalizeSlugs, hashIds } from "utils/helpers";

const getArticleData = async (slug, locale) => {
  const promises = [
    fetchAPI("/articles", {
      filters: {
        slug: `${slug}-${locale}`,
      },
      fields: ["headline", "subheadline", "updatedAt", "publishedAt"],
      populate: {
        author: {
          fields: ["displayName", "bio", "slug"],
          populate: {
            avatar: { fields: ["alternativeText", "caption", "url"] },
          },
        },
        category: {
          fields: ["name", "slug"],
        },
        tags: {
          fields: ["name", "slug"],
        },
        mainImage: {
          fields: ["alternativeText", "caption", "url"],
        },
        blocks: {
          populate: {
            text: { populate: "*" },
            show: { populate: "*" },
            image: { fields: ["url", "alternativeText", "width", "height"] },
          },
        },
        seo: {
          populate: {
            metaImage: {
              fields: ["alternativeText", "caption", "url", "width", "height"],
            },
          },
        },
      },
      locale,
    }),
  ];

  if (locale !== "en") {
    promises.push(
      fetchAPI("/articles", {
        filters: {
          slug: `${slug}-en`,
        },
        populate: { blocks: { populate: "*" } },
        locale: "en",
      })
    );
  }

  const responses = await Promise.all(promises);

  const data = responses[0].data[0].attributes;

  data.author = data.author.data.attributes;
  data.author.avatar = data.author.avatar.data.attributes;
  data.category = data.category.data.attributes;
  data.tags = data.tags.data.map((e) => e.attributes);
  data.mainImage = data.mainImage.data.attributes;
  data.seo.metaImage = data.seo.metaImage.data.attributes;

  data.blocks = data.blocks.map((e) => {
    return e.__component === "article-blocks.image"
      ? { ...e, image: e.image.data.attributes }
      : e;
  });

  // shorten the bio if it's longer than 128 chars
  if (data.author.bio.length > 128) {
    let trimmedString = data.author.bio.substr(0, 128);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    data.author.bio = { text: trimmedString, long: true };
  }

  // add english titles to non-english langs
  if (locale !== "en") {
    const enData = responses[1].data[0].attributes;

    for (const [i, v] of data.blocks.entries()) {
      if (v.__component === "article-blocks.timeline") {
        data.blocks[i].show.forEach((e, x) => {
          e.enTitle = enData.blocks[i].show[x].title;
        });
      }
    }
  }

  return hashIds(unlocalizeSlugs(data, locale));
};

export default getArticleData;
