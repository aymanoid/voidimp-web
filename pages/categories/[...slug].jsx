import {
  getPathsData,
  getGlobalData,
  getCategoryData,
  getListedArticlesData,
} from "utils/_queries";
import { useRouter } from "next/router";
import Layout from "components/common/Layout";
import CategorySEO from "components/SEO/CategorySEO";
import ArticlesList from "components/common/ArticlesList";
import PaginationButtons from "components/common/PaginationButtons";

const Category = ({ globalData, categoryData, categoryArticlesData }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      categories: "Categories",
      latest: "Latest In",
      noArticles: "This category has no articles.",
    },
    ar: {
      categories: "التصنيفات",
      latest: "الأحدث في",
      noArticles: "ليس لهذا التصنيف أي مقالات.",
    },
  }[locale];

  return (
    <Layout globalData={globalData}>
      <CategorySEO
        categoryName={categoryData.name}
        metaDescription={globalData.seo.metaDescription}
        metaImage={globalData.seo.metaImage}
      />
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article>
          <header>
            <span className="flex justify-center text-center text-lg font-semibold uppercase text-black/50 dark:text-white/50">
              {strings.categories}
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
          articlesData={categoryArticlesData.data}
          isCentered
        />
        <PaginationButtons paginationData={categoryArticlesData.pagination} />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPathsData("categories", true);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const currPage = !params.slug.includes("pages") ? "1" : params.slug[2];

  const [globalData, categoryData, categoryArticlesData] = await Promise.all([
    getGlobalData(locale),
    getCategoryData(params.slug[0], locale),
    getListedArticlesData(params.slug[0], locale, currPage, "category"),
  ]);

  return {
    props: {
      globalData,
      categoryData,
      categoryArticlesData,
    },
  };
};

export default Category;
