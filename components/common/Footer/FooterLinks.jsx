import Link from "next/link";

// TODO: remove isExternal property from "link" as it's not needed.
const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="border-b-2 border-violet-600 font-bold uppercase text-neutral-900 dark:border-violet-400 dark:text-white">
        {title}
      </h3>
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.href}>
            <a
              target={link.target}
              className="mt-2 block font-semibold text-neutral-700 hover:underline dark:text-neutral-200"
            >
              {link.label}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
