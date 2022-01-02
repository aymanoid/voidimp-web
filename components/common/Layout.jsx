import Navbar from "components/common/Navbar";
import Footer from "components/common/footer/Footer";

const Layout = ({ children, pageMeta }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
