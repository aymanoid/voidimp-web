import { fetchAPI } from "utils/api";

const get404PageData = async (locale) => {
  const response = await fetchAPI("/four-zero-four-page", {
    locale,
  });

  const data = response.data.attributes;

  delete data.createdAt;
  delete data.updatedAt;
  delete data.publishedAt;
  delete data.locale;

  return data;
};

export default get404PageData;
