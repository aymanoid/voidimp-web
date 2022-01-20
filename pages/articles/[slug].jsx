import Layout from "components/common/Layout";
import { getGlobalData, getArticleData, getArticlePaths } from "utils/queries";

const Article = ({ globalData, articleData }) => {
  return <Layout globalData={globalData}>{JSON.stringify(articleData)}</Layout>;
};

export const getStaticProps = async ({ locale, params }) => {
  const [globalData, articleData] = await Promise.all([
    getGlobalData(locale),
    getArticleData(params.slug, locale),
  ]);

  return {
    props: {
      globalData,
      articleData,
    },
  };
};

export const getStaticPaths = async () => {
  const articlePaths = await getArticlePaths();

  return {
    paths: articlePaths,
    fallback: false,
  };
};

export default Article;
