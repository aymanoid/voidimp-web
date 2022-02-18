import Layout from "components/common/Layout";
import { getGlobalData } from "utils/queries";
import Link from "next/link";
import HeroArticle from "components/home/HeroArticle";
import FeaturedArticles from "components/home/FeaturedArticles";
import SocialAd from "components/home/SocialAd";

const Home = ({ globalData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto min-h-0 max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="-mx-8 flex flex-wrap divide-x divide-violet-600/50 overflow-hidden dark:divide-violet-400/50 md:flex-row">
          <section className="flex w-full flex-col px-8 md:w-3/5">
            <HeroArticle />
            <div className="mt-4 border-b border-black/50 dark:border-white/50" />
            <SocialAd />
          </section>

          <FeaturedArticles />
        </div>
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

export default Home;
