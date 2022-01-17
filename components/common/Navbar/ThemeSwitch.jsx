import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const IconSvg =
    theme === "dark"
      ? dynamic(() => import("components/icons/sun.svg"))
      : dynamic(() => import("components/icons/moon.svg"));

  return (
    <button
      className="mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <IconSvg
        className={`w-6 h-6 fill-current`}
        viewBox="0 0 24 24"
        fill="none"
      />
    </button>
  );
};

export default ThemeSwitch;
