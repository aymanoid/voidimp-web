import Link from "next/link";

const NavigationLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="mt-2 transform font-semibold text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-500 lg:mx-4 lg:mt-0">
              {link.text}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
