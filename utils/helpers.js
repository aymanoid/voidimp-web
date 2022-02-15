export const urlize = (path, locale) => {
  const origin = "https://voidimp.com";
  return `${origin}${locale === "ar" ? "/ar" : ""}${path}`;
};
