import { useRouter } from "next/router";
import Link from "next/link";

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
      className="text-grey-50 hover:text-grey-50 mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 "
    >
      {targetLang.name}
    </button>
  );
};

export default LangSwitch;
