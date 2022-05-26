import crypto from "crypto";

export const urlize = (path, locale) => {
  const origin = "https://voidimp.com";
  return `${origin}${locale === "ar" ? "/ar" : ""}${path}`;
};

export const mutateAllValuesByKey = (obj, lookupKey, mutator, locale) => {
  if (typeof obj !== "object") return obj;

  for (let key in obj) {
    if (key === lookupKey) {
      obj[key] = mutator(obj[key], locale);
    }
    if (Array.isArray(obj[key])) {
      for (const [index] of obj[key].entries()) {
        obj[key][index] = mutateAllValuesByKey(
          obj[key][index],
          lookupKey,
          mutator,
          locale
        );
      }
    } else {
      obj[key] = mutateAllValuesByKey(obj[key], lookupKey, mutator, locale);
    }
  }

  return obj;
};

const hasher = (num) => {
  return crypto
    .createHash("shake256", { outputLength: 4 })
    .update(num.toString())
    .digest("hex");
};

export const unlocalizer = (slug, locale) => {
  return slug.endsWith(`-${locale}`)
    ? slug.slice(0, -(locale.length + 1))
    : slug;
};

export const hashIds = (obj) => {
  return mutateAllValuesByKey(obj, "id", hasher);
};

export const unlocalizeSlugs = (obj, locale) => {
  return mutateAllValuesByKey(obj, "slug", unlocalizer, locale);
};

export const deepLog = (obj) => {
  console.log(
    require("util").inspect(obj, {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
};
