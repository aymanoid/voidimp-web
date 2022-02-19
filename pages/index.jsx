import Layout from "components/common/Layout";
import { getGlobalData, getHomePageData } from "utils/queries";
import HeroArticle from "components/home/HeroArticle";
import FeaturedArticles from "components/home/FeaturedArticles";
import SocialAd from "components/home/SocialAd";
import TrendingArticles from "components/home/TrendingArticles";

const Home = ({ globalData, homePageData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="-mx-8 flex flex-wrap divide-x divide-violet-600/50 overflow-hidden dark:divide-violet-400/50 md:flex-row">
          <section className="flex w-full flex-col px-8 md:w-3/5">
            <HeroArticle articleData={homePageData.heroArticle} />
            <div className="mt-4 border-b border-black/50 dark:border-white/50" />
            <SocialAd />
          </section>

          <FeaturedArticles articlesData={homePageData.featuredArticles} />
        </div>

        {/*<div className="mt-8 border-b border-black/50 dark:border-white/50" />*/}
        <TrendingArticles />
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
