import Layout from "components/common/Layout";
import { getGlobalData } from "utils/queries";
import Link from "next/link";

const Index = ({ globalData }) => {
  return (
    <Layout globalData={globalData}>
      <div>haha</div>
      <Link href="/articles/this-post-is-for-testing-purposes-only-theres-nothing-interesting-here-to-read">
        <a>
          This Post Is for Testing Purposes Only, There’s Nothing Interesting
          Here To Read
        </a>
      </Link>
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

export default Index;
