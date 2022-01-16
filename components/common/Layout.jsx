import { useRouter } from "next/router";

import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ globalData, children }) => {
  const { locale } = useRouter();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex flex-col justify-between h-screen"
    >
      <Navbar
        searchBarLabel={globalData.searchBarLabel}
        navbarLinks={globalData.navbarLinks}
        socialLinks={globalData.socialLinks}
      />
      <main className="mb-auto max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </main>
      <Footer
        footerDescription={globalData.footerDescription}
        footerLinkColumns={globalData.footerLinkColumns}
        footerRights={globalData.footerRights}
      />
    </div>
  );
};

export default Layout;
