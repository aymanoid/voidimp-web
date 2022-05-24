import crypto from "crypto";

export const urlize = (path, locale) => {
  const origin = "https://voidimp.com";
  return `${origin}${locale === "ar" ? "/ar" : ""}${path}`;
};

export const hashIds = (obj) => {
  if (typeof obj !== "object") return obj;

  for (let key in obj) {
    if (key === "id") {
      obj[key] = crypto
        .createHash("shake256", { outputLength: 4 })
        .update(obj[key].toString())
        .digest("hex");
    }
    if (Array.isArray(obj[key])) {
      for (const [index] of obj[key].entries()) {
        obj[key][index] = hashIds(obj[key][index]);
      }
    } else {
      obj[key] = hashIds(obj[key]);
    }
  }

  return obj;
};
