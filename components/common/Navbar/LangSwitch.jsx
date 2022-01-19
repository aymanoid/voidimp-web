import { useRouter } from "next/router";

const LangSwitch = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const targetLang =
    locale === "en"
      ? { name: "العربية", locale: "ar" }
      : { name: "English", locale: "en" };

  const changeLang = () => {
    router.push({ pathname, query }, asPath, { locale: targetLang.locale });
    document.cookie = `NEXT_LOCALE=${targetLang.locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };

  return (
    <button
      onClick={changeLang}
      className="mx-2 font-semibold transition-colors duration-200 transform lg:mt-0 text-neutral-700 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-500"
    >
      {targetLang.name}
    </button>
  );
};

export default LangSwitch;
