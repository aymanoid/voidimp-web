import { getGlobalData, getAuthorData, getAuthorPaths } from "utils/queries";
import Layout from "components/common/Layout";
import AvatarImage from "components/authors/AvatarImage";

const Author = ({ globalData, authorData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article className="">
          <header className="space-y-4">
            <AvatarImage imageData={authorData.avatar} />
            <h1 className="text-center text-3xl font-extrabold uppercase text-neutral-700 dark:text-neutral-200 sm:text-4xl">
              {authorData.displayName}
            </h1>
            <p className="text-center">{authorData.bio}</p>
          </header>
        </article>
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
