import { useRouter } from "next/router";

import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ globalData, children }) => {
  const { locale } = useRouter();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex h-screen flex-col justify-between"
    >
      <Navbar
        searchBarLabel={globalData.searchBarLabel}
        navbarLinks={globalData.navbarLinks}
        socialLinks={globalData.socialLinks}
      />
      <main className="relative p-4 lg:p-8">{children}</main>
      <Footer
        footerDescription={globalData.footerDescription}
        socialLinks={globalData.socialLinks}
        footerLinkColumns={globalData.footerLinkColumns}
        footerRights={globalData.footerRights}
      />
    </div>
  );
};

export default Layout;
