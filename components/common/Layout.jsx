import Navbar from "components/common/Navbar";
import Footer from "components/common/footer/Footer";

const Layout = ({ children, pageMeta }) => {
  return (
    <>
      <Navbar />
      <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
