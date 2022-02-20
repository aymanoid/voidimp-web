import { useRouter } from "next/router";
import Layout from "components/common/Layout";
import { getGlobalData, getHomePageData } from "utils/queries";
import HeroArticle from "components/home/HeroArticle";
import FeaturedArticles from "components/home/FeaturedArticles";
import SocialAd from "components/home/SocialAd";
import TrendingArticles from "components/home/TrendingArticles";
import ArticlesList from "components/common/ArticlesList";
import HomeSEO from "components/SEO/HomeSEO";

const Home = ({ globalData, homePageData }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      latest: "Latest Articles",
      noArticles: "This section has no articles.",
    },
    ar: {
      latest: "اخر المقالات",
      noArticles: "ليس لهذا القسم أي مقالات.",
    },
  }[locale];

  return (
    <Layout globalData={globalData}>
      <HomeSEO
        metaTitle={homePageData.seoData.metaTitle}
        description={globalData.metaDescription}
        imageData={globalData.metaImage}
      />
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="-mx-8 flex flex-wrap md:flex-row">
          <section className="flex w-full flex-col border-violet-600/50 px-8 ltr:border-r rtl:border-l dark:border-violet-400/50 md:w-3/5">
            <HeroArticle articleData={homePageData.heroArticle} />
            <div className="mt-4 border-b border-black/50 dark:border-white/50" />
            <SocialAd />
          </section>

          <FeaturedArticles articlesData={homePageData.featuredArticles} />
        </div>

        {/*<div className="mt-8 border-b border-black/50 dark:border-white/50" />*/}
        <TrendingArticles />

        <ArticlesList
          topStr={strings.latest}
          noArticlesStr={strings.noArticles}
        />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const [globalData, homePageData] = await Promise.all([
    getGlobalData(locale),
    getHomePageData(locale),
  ]);

  return {
    props: {
      globalData,
      homePageData,
    },
  };
};

export default Home;
