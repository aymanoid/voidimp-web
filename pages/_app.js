import Layout from "components/common/Layout";
import "styles/globals.css";

const VoidImp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default VoidImp;
