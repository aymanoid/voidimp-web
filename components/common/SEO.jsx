import Head from "next/head";

const CommonSEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

const PageSEO = ({ seoData }) => {
  return <CommonSEO title={seoData.title} />;
};

export { PageSEO };
