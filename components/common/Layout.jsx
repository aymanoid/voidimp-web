import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ globalData, children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar
        searchBarLabel={globalData.searchBarLabel}
        navbarLinks={globalData.navbarLinks}
        socialLinks={globalData.socialLinks}
      />
      <main className="relative p-4 lg:p-8">{children}</main>
      <Footer
        footerDescription={globalData.metaDescription}
        socialLinks={globalData.socialLinks}
        footerLinkColumns={globalData.footerLinkColumns}
        footerRights={globalData.footerRights}
      />
    </div>
  );
};

export default Layout;
