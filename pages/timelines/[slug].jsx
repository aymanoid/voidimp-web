import {
  getGlobalData,
  getArticleData,
  getArticlePaths,
  getBriefAuthorData,
  getMultipleTagsData,
  getCategoryData,
} from "utils/queries";
import Layout from "components/common/Layout";
import Metadata from "components/articles/Metadata";
import ShareButtons from "components/articles/ShareButtons";
import HeadingImage from "components/articles/HeadingImage";
import TextSegment from "components/articles/TextSegment";
import ImageSegment from "components/articles/ImageSegment";
import SidebarRecommended from "components/articles/SidebarRecommended";
import TagsList from "components/articles/TagsList";
import AuthorInfo from "components/articles/AuthorInfo";
import LatestArticles from "components/articles/LatestArticles";
import TimelineBody from "components/timelines/TimelineBody";

const Article = ({
  globalData,
  articleData,
  authorData,
  tagsData,
  categoryData,
}) => {
  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article className="flex flex-row flex-wrap">
          <header className="w-full space-y-4">
            <h1 className="text-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              uwu
            </h1>
            <p className="text-center text-xl font-semibold text-neutral-600 dark:text-neutral-300 sm:text-3xl">
              owo
            </p>
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:items-end md:space-y-0 md:space-x-5"></div>
            <div className="border-b border-violet-600/50 dark:border-violet-400/50"></div>
          </header>

          <section
            id="article-body"
            itemProp="articleBody"
            className="mt-4 w-full space-y-5 lg:w-2/3 lg:space-y-8 lg:ltr:pr-5 lg:rtl:pl-5 xl:w-3/4 xl:ltr:pr-10 xl:rtl:pl-10"
          >
            <TimelineBody />
            <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
          </section>

          <aside className="mt-4 w-full lg:w-1/3 xl:w-1/4">
            <SidebarRecommended isMocked />
          </aside>
        </article>
        <div className="mt-6 border-b border-black/50 dark:border-white/50"></div>
        <div className="mt-6">
          <LatestArticles isMocked />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const [globalData] = await Promise.all([getGlobalData(locale)]);

  return {
    props: {
      globalData,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "test" } },
      { params: { slug: "test" }, locale: "ar" },
    ],
    fallback: false,
  };
};

export default Article;
