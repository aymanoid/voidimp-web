/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";
import GlobeSvg from "components/icons/globe.svg";
import { useRouter } from "next/router";
import { Fragment } from "react";

const locales = [
  {
    name: "English",
    code: "en",
    icon: "https://hatscripts.github.io/circle-flags/flags/language/en-us.svg",
  },
  {
    name: "العربية",
    code: "ar",
    icon: "https://hatscripts.github.io/circle-flags/flags/language/ar.svg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangPicker = () => {
  const router = useRouter();

  const changeLang = (locale) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale }
    );
    document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mx-2 rounded-full flex items-center transform text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-400">
          <span className="sr-only">Open language options</span>
          <GlobeSvg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top -left-[5.75rem] absolute mt-2 w-56 rounded-md shadow-lg bg-neutral-100 dark:bg-neutral-800">
          <div className="py-1 divide-y divide-dashed dark:divide-neutral-700 divide-neutral-200">
            {locales.map((e) => (
              <Menu.Item key={e.code}>
                {({ active }) => (
                  <a
                    onClick={() => changeLang(e.code)}
                    className={classNames(
                      active
                        ? "text-violet-600 dark:text-violet-400"
                        : "dark:text-neutral-200 text-neutral-700",
                      "block px-4 py-2 text-sm cursor-pointer ltr:text-left rtl:text-right font-semibold"
                    )}
                  >
                    <img
                      src={e.icon}
                      className="ltr:mr-3 rtl:ml-3 inline"
                      alt={e.name}
                      width={20}
                      height={20}
                    />
                    {e.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangPicker;
