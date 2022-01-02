import Layout from "components/common/Layout";
import "styles/globals.css";

const VoidImpApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default VoidImpApp;
