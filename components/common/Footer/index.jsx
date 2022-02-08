import SocialIcon from "components/common/SocialIcon";
import FooterLinks from "components/common/Footer/FooterLinks";

const Footer = ({
  footerDescription,
  socialLinks,
  footerLinkColumns,
  footerRights,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 shadow dark:bg-neutral-800">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <div>
                <a
                  href="#"
                  className="text-xl font-bold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300"
                >
                  VoidImp
                </a>
              </div>

              <p className="mt-2 max-w-md text-neutral-700 dark:text-neutral-200">
                {footerDescription}
              </p>

              <div className="-mx-2 mt-4 flex">
                {socialLinks.map((link, index) => (
                  <SocialIcon
                    key={index}
                    kind={link.kind}
                    name={link.name}
                    url={link.url}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {footerLinkColumns.map((linkColumn, index) => {
                return (
                  <FooterLinks
                    key={index}
                    title={linkColumn.title}
                    links={linkColumn.links}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <hr className="my-6 h-px border-none bg-violet-400 dark:bg-violet-400" />

        <div>
          <p className="text-center text-neutral-700 dark:text-neutral-200">
            {footerRights.replace("{{year}}", currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
