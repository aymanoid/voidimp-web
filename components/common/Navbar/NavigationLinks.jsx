import { Popover } from "@headlessui/react";
import Link from "next/link";

// TODO: remove isExternal property from "link" as it's not needed.
const NavigationLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.href}>
            <a
              target={link.target}
              className="transform font-semibold text-base text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-400"
            >
              {link.label}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
