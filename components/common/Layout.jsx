import Navbar from "components/common/header/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ children, pageMeta }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
