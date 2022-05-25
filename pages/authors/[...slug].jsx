import {
  getPathsData,
  getGlobalData,
  getAuthorData,
  getListedArticlesData,
} from "utils/_queries";
import { useRouter } from "next/router";
import Layout from "components/common/Layout";
import AuthorSEO from "components/SEO/AuthorSEO";
import AvatarImage from "components/authors/AvatarImage";
import ArticlesList from "components/common/ArticlesList";
import PaginationButtons from "components/common/PaginationButtons";

const Author = ({ globalData, authorData, authorArticlesData }) => {
  const { locale, query } = useRouter();

  const strings = {
    en: {
      latest: "Latest From",
      noArticles: "This author has no articles.",
    },
    ar: {
      latest: "الأحدث من",
      noArticles: "ليس لهذا المؤلف أي مقالات.",
    },
  }[locale];

  const prevHref =
    authorArticlesData.pagination.prevPage === 1
      ? `/authors/${query.slug[0]}`
      : `/authors/${query.slug[0]}/pages/${authorArticlesData.pagination.prevPage}`;
  const nextHref = `/authors/${query.slug[0]}/pages/${authorArticlesData.pagination.nextPage}`;

  return (
    <Layout globalData={globalData}>
      <AuthorSEO
        authorName={authorData.displayName}
        slug={query.slug[0]}
        currPage={authorArticlesData.pagination.page}
        prevPage={authorArticlesData.pagination.prevPage}
        nextPage={authorArticlesData.pagination.nextPage}
        metaImage={authorData.avatar}
        description={"globalData.metaDescription"}
      />
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article className="">
          <header className="space-y-4">
            <AvatarImage imageData={authorData.avatar} />
            <h1 className="text-center text-3xl font-extrabold uppercase text-black dark:text-white sm:text-4xl">
              {authorData.displayName}
            </h1>
            <p className="text-center">{authorData.bio}</p>
          </header>
        </article>
        <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
        <ArticlesList
          topStr={`${strings.latest} ${authorData.displayName}`}
          noArticlesStr={strings.noArticles}
          articlesData={authorArticlesData.data}
          isCentered
        />
        <PaginationButtons
          paginationData={authorArticlesData.pagination}
          prevHref={prevHref}
          nextHref={nextHref}
        />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPathsData("authors", true);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const currPage = !params.slug.includes("pages") ? "1" : params.slug[2];

  const [globalData, authorData, authorArticlesData] = await Promise.all([
    getGlobalData(locale),
    getAuthorData(params.slug[0], locale),
    getListedArticlesData(params.slug[0], locale, currPage, "author"),
  ]);

  return {
    props: {
      globalData,
      authorData,
      authorArticlesData,
    },
  };
};

export default Author;
