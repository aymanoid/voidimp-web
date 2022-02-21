import {
  getGlobalData,
  getTagData,
  getTagPaths,
  getTagArticles,
} from "utils/queries";
import { useRouter } from "next/router";
import Layout from "components/common/Layout";
import TagSEO from "components/SEO/TagSEO";
import ArticlesList from "components/common/ArticlesList";
import PaginationButtons from "components/common/PaginationButtons";

const Tag = ({ globalData, tagData, tagArticles }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      tags: "Tags",
      latest: "Latest In",
      noArticles: "This tag has no articles.",
    },
    ar: {
      tags: "العلامات",
      latest: "الأحدث في",
      noArticles: "ليس لهذه العلامة أي مقالات.",
    },
  }[locale];

  return (
    <Layout globalData={globalData}>
      <TagSEO
        tagName={tagData.name}
        description={globalData.metaDescription}
        imageData={globalData.metaImage}
      />
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article>
          <header>
            <span className="flex justify-center text-center text-lg font-semibold uppercase text-black/50 dark:text-white/50">
              {strings.tags}
            </span>
            <h1 className="text-center text-3xl font-extrabold uppercase text-black dark:text-white sm:text-4xl">
              {tagData.name}
            </h1>
          </header>
        </article>
        <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
        <ArticlesList
          topStr={`${strings.latest} ${tagData.name}`}
          noArticlesStr={strings.noArticles}
          articlesData={tagArticles.articles}
          isCentered
        />
        <PaginationButtons paginationData={tagArticles.paginationData} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const currPage = !params.slug.includes("pages") ? "1" : params.slug[2];

  const [globalData, tagData] = await Promise.all([
    getGlobalData(locale),
    getTagData(params.slug[0], locale),
  ]);

  const [tagArticles] = await Promise.all([
    getTagArticles(tagData.id, locale, currPage),
  ]);

  delete tagData.id;

  return {
    props: {
      globalData,
      tagData,
      tagArticles,
    },
  };
};

export const getStaticPaths = async () => {
  const tagPaths = await getTagPaths();

  return {
    paths: tagPaths,
    fallback: false,
  };
};

export default Tag;
