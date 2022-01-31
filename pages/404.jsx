import Layout from "components/common/Layout";
import { PageSEO } from "components/common/SEO";
import { getGlobalData, get404PageData } from "utils/queries";
import Link from "next/link";

const FourZeroFour = ({ globalData, seoData, pageData }) => {
  return (
    <Layout globalData={globalData}>
      <PageSEO seoData={seoData} />
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="md:leading-14 mb-8 text-6xl font-extrabold leading-9 tracking-tight text-violet-600 dark:text-violet-500 md:px-6 md:text-8xl">
            404
          </h1>
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            {pageData.firstText}
          </p>
          <p className="mb-8">{pageData.secondText}</p>
          <Link href="/">
            <a className="rounded-full border border-violet-600 bg-transparent px-4 py-2 font-semibold hover:border-transparent hover:bg-violet-600 dark:border-violet-500 dark:hover:bg-violet-500">
              {pageData.backButton}
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const [globalData, pageData] = await Promise.all([
    getGlobalData(locale),
    get404PageData(locale),
  ]);

  return {
    props: {
      globalData,
      ...pageData,
    },
  };
};

export default FourZeroFour;
