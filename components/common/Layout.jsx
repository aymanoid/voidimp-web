import Navbar from "components/common/header/Navbar";
import Footer from "components/common/footer/Footer";

const Layout = ({ children, pageMeta }) => {
  return (
    <body className="bg-neutral-400">
      <Navbar />
      <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        {children}
      </main>
      <Footer />
    </body>
  );
};

export default Layout;
