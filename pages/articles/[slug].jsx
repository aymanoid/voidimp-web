import {
  getPathsData,
  getGlobalData,
  getArticleData,
  getRelatedArticlesData,
} from "utils/_queries";
import Layout from "components/common/Layout";
import ArticleSEO from "components/SEO/ArticleSEO";
import Metadata from "components/articles/Metadata";
import ShareButtons from "components/articles/ShareButtons";
import HeadingImage from "components/articles/HeadingImage";
import TextSegment from "components/articles/TextSegment";
import ImageSegment from "components/articles/ImageSegment";
import TimelineSegment from "components/articles/TimelineSegment";
import SidebarRecommended from "components/articles/SidebarRecommended";
import TagsList from "components/articles/TagsList";
import AuthorInfo from "components/articles/AuthorInfo";
import LatestArticles from "components/articles/LatestArticles";

const Article = ({ globalData, articleData, relatedArticlesData }) => {
  return (
    <Layout globalData={globalData}>
      <ArticleSEO
        metaTitle={articleData.seo.metaTitle}
        metaDescription={articleData.seo.metaDescription}
        headline={articleData.headline}
        subheadline={articleData.subheadline}
        metaImage={articleData.seo.metaImage}
        publishedAt={articleData.publishedAt}
        updatedAt={articleData.updatedAt}
        authorName={articleData.author.displayName}
        authorUsername={articleData.author.slug}
        tagsData={articleData.tags}
        categoryName={articleData.category.name}
      />
      <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article className="flex flex-row flex-wrap">
          <header className="w-full space-y-4">
            <HeadingImage imageData={articleData.mainImage} />
            <h1 className="text-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              {articleData.headline}
            </h1>
            <p className="text-center text-xl font-semibold text-neutral-600 dark:text-neutral-300 sm:text-3xl">
              {articleData.subheadline}
            </p>
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:items-end md:space-y-0 md:space-x-5">
              <Metadata
                authorData={articleData.author}
                publishedAt={articleData.publishedAt}
              />
              <ShareButtons headline={articleData.headline} />
            </div>
            <div className="border-b border-violet-600/50 dark:border-violet-400/50"></div>
          </header>

          <section
            id="article-body"
            itemProp="articleBody"
            className="mt-4 w-full space-y-5 lg:w-2/3 lg:space-y-8 lg:ltr:pr-5 lg:rtl:pl-5 xl:w-3/4 xl:ltr:pr-10 xl:rtl:pl-10"
          >
            {articleData.blocks.map((block, index) => {
              if (block.__component === "article-blocks.rich-text")
                return <TextSegment key={index} textData={block.text} />;

              if (block.__component === "article-blocks.image")
                return <ImageSegment key={index} imageData={block.image} />;

              if (block.__component === "article-blocks.timeline")
                return (
                  <TimelineSegment key={index} timelineData={block.show} />
                );
            })}

            <TagsList tagsData={articleData.tags} />
            <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
            <AuthorInfo authorData={articleData.author} />
          </section>

          <aside className="mt-4 w-full lg:w-1/3 xl:w-1/4">
            <SidebarRecommended
              articlesData={relatedArticlesData.featuredArticles}
            />
          </aside>
        </article>
        <div className="mt-6 border-b border-black/50 dark:border-white/50"></div>
        <div className="mt-6">
          <LatestArticles articlesData={relatedArticlesData.latestArticles} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPathsData("articles");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const [globalData, articleData, relatedArticlesData] = await Promise.all([
    getGlobalData(locale),
    getArticleData(params.slug, locale),
    getRelatedArticlesData(params.slug, locale),
  ]);

  return {
    props: {
      globalData,
      articleData,
      relatedArticlesData,
    },
  };
};

export default Article;
