import { useRouter } from "next/router";

import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ headerData, children, footerData }) => {
  const { locale } = useRouter();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex flex-col justify-between h-screen"
    >
      <Navbar headerData={headerData} />
      <main className="mb-auto max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </main>
      <Footer footerData={footerData} />
    </div>
  );
};

export default Layout;
