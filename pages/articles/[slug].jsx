import { getGlobalData, getArticleData, getArticlePaths } from "utils/queries";
import Layout from "components/common/Layout";
import Image from "next/image";
import Metadata from "components/articles/Metadata";
import ShareButtons from "components/articles/ShareButtons";
import TextSegment from "components/articles/TextSegment";
import ImageSegment from "components/articles/ImageSegment";

const Article = ({ globalData, articleData }) => {
  return (
    <Layout globalData={globalData}>
      <article className="grid grid-cols-4 gap-2">
        <header className="mb-4 space-y-4 col-span-full">
          <div className="flex justify-center">
            <Image
              src={articleData.mainImage.url}
              alt={articleData.mainImage.alt}
              width={1920 / 3}
              height={1080 / 3}
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold text-center sm:text-4xl text-neutral-700 dark:text-neutral-200">
            {articleData.headline}
          </h1>
          <h2 className="text-xl font-semibold text-center sm:text-3xl text-neutral-600 dark:text-neutral-300">
            {articleData.subheadline}
          </h2>
          <div className="flex flex-col justify-between space-y-5 lg:flex-row lg:items-end lg:space-y-0 lg:space-x-5">
            <Metadata
              authorData={articleData.author}
              pubTimestamp={articleData.postDate}
            />
            <ShareButtons />
          </div>
          <div className="border-b dark:border-violet-500 border-violet-600"></div>
        </header>

        <section className="col-span-4 space-y-4 lg:col-span-3">
          {articleData.segments.map((segment, index) => {
            if (segment.type === "text")
              return <TextSegment key={index} textData={segment.primary} />;

            if (segment.type === "image")
              return <ImageSegment key={index} imageData={segment.primary} />;
          })}
        </section>
        <aside></aside>
      </article>
    </Layout>
  );
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
