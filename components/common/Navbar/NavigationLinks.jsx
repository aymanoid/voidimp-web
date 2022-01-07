import Link from "next/link";

const NavigationLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="text-grey-50 hover:text-grey-50 mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 ">
              {link.text}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
