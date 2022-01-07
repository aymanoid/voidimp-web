import Layout from "components/common/Layout";
import { PageSEO } from "components/common/SEO";
import Link from "next/link";

const FourZeroFour = ({ pageSEO }) => {
  return (
    <Layout>
      <PageSEO title={pageSEO.title} />
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-violet-500 text-6xl font-extrabold leading-9 tracking-tight md:text-8xl mb-8 md:leading-14 md:px-6">
            404
          </h1>
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            {"Oh no! Seems like you've fallen into the void!"}
          </p>
          <p className="mb-8">
            {"I suggest you go back to safety before it's too late."}
          </p>
          <Link href="/">
            <a className="bg-transparent hover:bg-violet-500 font-semibold py-2 px-4 border border-violet-500 hover:border-transparent rounded-full">
              Go Back
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  const pageSEO = { title: "Page Not Found | VoidImp" };

  return {
    props: {
      pageSEO,
    },
  };
};

export default FourZeroFour;
