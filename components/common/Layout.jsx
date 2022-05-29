import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";

const Layout = ({ globalData, children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar
        searchBarLabel={globalData.header.searchBarLabel}
        headerLinks={globalData.header.links}
        socialNetworks={globalData.socialNetworks}
      />
      <main className="relative p-4 lg:p-8">{children}</main>
      <Footer
        footerDescription={globalData.footer.footerDescription}
        socialNetworks={globalData.socialNetworks}
        footerLinkColumns={globalData.footer.footerColumns}
        footerRights={globalData.footer.footerRights}
      />
    </div>
  );
};

export default Layout;
