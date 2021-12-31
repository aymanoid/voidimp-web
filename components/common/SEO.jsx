import Head from "next/head";

const SEO = ({ title = "VoidImp" }) => {
  return (
    <Head>
      <title key="title">{title}</title>
    </Head>
  );
};

export default SEO;
