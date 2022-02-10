import { getGlobalData, getAuthorData, getAuthorPaths } from "utils/queries";
import Layout from "components/common/Layout";

const Author = ({ globalData, authorData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        {authorData.displayName}
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const [globalData, authorData] = await Promise.all([
    getGlobalData(locale),
    getAuthorData(params.username, locale),
  ]);

  return {
    props: {
      globalData,
      authorData,
    },
  };
};

export const getStaticPaths = async () => {
  const authorPaths = await getAuthorPaths();

  return {
    paths: authorPaths,
    fallback: false,
  };
};

export default Author;
