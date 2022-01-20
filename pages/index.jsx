import Layout from "components/common/Layout";
import { getGlobalData } from "utils/queries";

const Index = ({ globalData }) => {
  return <Layout globalData={globalData}>haha</Layout>;
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
