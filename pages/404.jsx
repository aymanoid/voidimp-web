import Layout from "components/common/Layout";
import { PageSEO } from "components/common/SEO";
import { getGlobalData, get404PageData } from "utils/queries";
import Link from "next/link";

const FourZeroFour = ({ headerData, footerData, pageSEO, pageData }) => {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <PageSEO title={pageSEO.title} />
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-violet-500 text-6xl font-extrabold leading-9 tracking-tight md:text-8xl mb-8 md:leading-14 md:px-6">
            404
          </h1>
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            {pageData.firstText}
          </p>
          <p className="mb-8">{pageData.secondText}</p>
          <Link href="/">
            <a className="bg-transparent hover:bg-violet-500 font-semibold py-2 px-4 border border-violet-500 hover:border-transparent rounded-full">
              {pageData.backButton}
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const globalData = await getGlobalData(locale);
  const pageData = await get404PageData(locale);

  return {
    props: {
      ...globalData,
      ...pageData,
    },
  };
};

export default FourZeroFour;
