import {
  getGlobalData,
  getArticleData,
  getArticlePaths,
  getBriefAuthorData,
  getMultipleTagsData,
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

const Article = ({ globalData, articleData, authorData, tagsData }) => {
  return (
    <Layout globalData={globalData}>
      <article className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <header className="space-y-4">
          <HeadingImage imageData={articleData.mainImage} />
          <h1 className="text-center text-3xl font-extrabold text-neutral-700 dark:text-neutral-200 sm:text-4xl">
            {articleData.headline}
          </h1>
          <h2 className="text-center text-xl font-semibold text-neutral-600 dark:text-neutral-300 sm:text-3xl">
            {articleData.subheadline}
          </h2>
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:items-end md:space-y-0 md:space-x-5">
            <Metadata
              authorData={authorData}
              pubTimestamp={articleData.postDate}
            />
            <ShareButtons />
          </div>
          <div className="border-b border-violet-600/50 dark:border-violet-400/50"></div>
        </header>

        <div className="my-4 flex flex-col lg:flex-row">
          <section className="w-full space-y-4 lg:w-2/3 lg:ltr:pr-5 lg:rtl:pl-5 xl:w-3/4 xl:ltr:pr-10 xl:rtl:pl-10">
            {articleData.segments.map((segment, index) => {
              if (segment.type === "text")
                return <TextSegment key={index} textData={segment.primary} />;

              if (segment.type === "image")
                return <ImageSegment key={index} imageData={segment.primary} />;
            })}

            <TagsList tagsData={tagsData} />
            <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
            <AuthorInfo authorData={authorData} />
          </section>
          <aside className="w-full lg:w-1/3 xl:w-1/4">
            <SidebarRecommended />
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const [globalData, articleData] = await Promise.all([
    getGlobalData(locale),
    getArticleData(params.slug, locale),
  ]);

  const [authorData, tagsData] = await Promise.all([
    getBriefAuthorData(articleData.authorUsername, locale),
    getMultipleTagsData(articleData.tags, locale),
  ]);

  delete articleData.authorUsername;
  delete articleData.tags;

  return {
    props: {
      globalData,
      articleData,
      authorData,
      tagsData,
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
