import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ globalData, children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar
        searchBarLabel={globalData.header.searchBarLabel}
        headerLinks={globalData.header.links}
        socialLinks={globalData.common.socialLinks}
      />
      <main className="relative p-4 lg:p-8">{children}</main>
      <Footer
        footerDescription={globalData.footer.footerDescription}
        socialLinks={globalData.common.socialLinks}
        footerLinkColumns={globalData.footer.footerColumns}
        footerRights={globalData.footer.footerRights}
      />
    </div>
  );
};

export default Layout;
