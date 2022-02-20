import {
  getGlobalData,
  getCategoryData,
  getCategoryPaths,
  getCategoryArticles,
} from "utils/queries";
import { useRouter } from "next/router";
import Layout from "components/common/Layout";
import CategorySEO from "components/SEO/CategorySEO";
import ArticlesList from "components/common/ArticlesList";
import PaginationButtons from "components/authors/PaginationButtons";

const Category = ({ globalData, categoryData, categoryArticles }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      tags: "Categories",
      latest: "Latest In",
      noArticles: "This category has no articles.",
    },
    ar: {
      tags: "التصنيفات",
      latest: "الأحدث في",
      noArticles: "ليس لهذا التصنيف أي مقالات.",
    },
  }[locale];

  return (
    <Layout globalData={globalData}>
      <CategorySEO
        categoryName={categoryData.name}
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
              {categoryData.name}
            </h1>
          </header>
        </article>
        <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
        <ArticlesList
          topStr={`${strings.latest} ${categoryData.name}`}
          noArticlesStr={strings.noArticles}
          articlesData={categoryArticles.articles}
          isCentered
        />
        <PaginationButtons paginationData={categoryArticles.paginationData} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const currPage = !params.slug.includes("pages") ? "1" : params.slug[2];

  const [globalData, categoryData] = await Promise.all([
    getGlobalData(locale),
    getCategoryData(params.slug[0], locale),
  ]);

  const [categoryArticles] = await Promise.all([
    getCategoryArticles(categoryData.id, locale, currPage),
  ]);

  delete categoryData.id;

  return {
    props: {
      globalData,
      categoryData,
      categoryArticles,
    },
  };
};

export const getStaticPaths = async () => {
  const categoryPaths = await getCategoryPaths();

  return {
    paths: categoryPaths,
    fallback: false,
  };
};

export default Category;
