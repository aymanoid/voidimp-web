import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import SunSvg from "components/icons/sun.svg";
import MoonSvg from "components/icons/moon.svg";

const ThemeSwitch = () => {
  const { locale } = useRouter();
  const { theme, setTheme } = useTheme();

  const IconSvg = theme === "dark" ? SunSvg : MoonSvg;
  const strings = {
    en: { btnAriaLabel: "Switch Theme" },
    ar: { btnAriaLabel: "غير السمة" },
  }[locale];

  return (
    <button
      aria-label={strings.btnAriaLabel}
      className="mx-2 transform text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-400 lg:mt-0"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <IconSvg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        fill="none"
      />
    </button>
  );
};

export default ThemeSwitch;

// svg icons from https://iconmonstr.com/
