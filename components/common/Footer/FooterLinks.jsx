import Link from "next/link";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-gray-700 uppercase dark:text-white">{title}</h3>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
              {link.text}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
