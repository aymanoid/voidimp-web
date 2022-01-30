import Link from "next/link";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="border-b-2 border-violet-600 font-bold uppercase text-neutral-900 dark:border-violet-500 dark:text-white">
        {title}
      </h3>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="mt-2 block font-semibold text-neutral-700 hover:underline dark:text-neutral-200">
              {link.text}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
