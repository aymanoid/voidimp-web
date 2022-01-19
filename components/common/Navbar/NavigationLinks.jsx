import Link from "next/link";

const NavigationLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="mt-2 font-semibold transition-colors duration-200 transform text-neutral-700 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-500 lg:mt-0 lg:mx-4">
              {link.text}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
