import Navbar from "components/common/Navbar";
import Footer from "components/common/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="mb-auto max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
