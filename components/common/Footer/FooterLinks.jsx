import Link from "next/link";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold uppercase border-b-2 text-neutral-900 dark:text-white border-violet-600 dark:border-violet-500">
        {title}
      </h3>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="block mt-2 font-semibold text-neutral-700 dark:text-neutral-200 hover:underline">
              {link.text}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
