import Head from "next/head";

const CommonSEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

const PageSEO = ({ title }) => {
  return <CommonSEO title={title} />;
};

export { PageSEO };
