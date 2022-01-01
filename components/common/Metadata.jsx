import Head from "next/head";

const Metadata = ({ title = "VoidImp" }) => {
  return (
    <Head>
      <title key="title">{title}</title>
    </Head>
  );
};

export default Metadata;
