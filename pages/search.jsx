import { getGlobalData, getSearchArticles } from "utils/queries";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "components/common/Layout";
import ArticlesList from "components/common/ArticlesList";
import PaginationButtons from "components/common/PaginationButtons";

const Category = ({ globalData }) => {
  const { query, locale } = useRouter();
  const currPage = !query.page ? "1" : query.page;

  const { data, error } = useSWR(
    [query.q, locale, currPage],
    getSearchArticles
  );

  const strings = {
    en: {
      searched: "Searched",
      relevant: "Relevant",
      searching: "Searching...",
      noArticles: "No articles found.",
      errored: "There was an error searching for articles.",
    },
    ar: {
      searched: "بحث عن",
      relevant: "ذات صلة",
      searching: "قيد البحث...",
      noArticles: "لم يتم إيجاد أي مقالات.",
      errored: "لقد حدث خطأ خلال البحث عن المقالات.",
    },
  }[locale];

  let prevHref, nextHref;
  if (data && data.paginationData) {
    prevHref =
      data.paginationData.prevPage === 1
        ? `/search?q=${query.q}`
        : `/search?q=${query.q}&page=${data.paginationData.prevPage}`;
    nextHref = `/search?q=${query.q}&page=${data.paginationData.nextHref}`;
  }

  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article>
          <header>
            <span className="flex justify-center text-center text-lg font-semibold uppercase text-black/50 dark:text-white/50">
              {strings.searched}
            </span>
            <h1 className="text-center text-3xl font-extrabold uppercase text-black dark:text-white sm:text-4xl">
              {`"${query.q}"`}
            </h1>
          </header>
        </article>
        <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
        {error && (
          <ArticlesList
            topStr={strings.relevant}
            noArticlesStr={strings.errored}
            articlesData={[]}
            isCentered
          />
        )}
        {data ? (
          <ArticlesList
            topStr={strings.relevant}
            noArticlesStr={strings.noArticles}
            articlesData={data.articles}
            isCentered
          />
        ) : (
          <ArticlesList
            topStr={strings.relevant}
            noArticlesStr={strings.searching}
            articlesData={[]}
            isCentered
          />
        )}
        {data && data.paginationData && (
          <PaginationButtons
            paginationData={data.paginationData}
            prevHref={prevHref}
            nextHref={nextHref}
          />
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const [globalData] = await Promise.all([getGlobalData(locale)]);

  return {
    props: {
      globalData,
    },
  };
};

export default Category;
