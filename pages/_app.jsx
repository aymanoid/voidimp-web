import "styles/globals.css";
import { useRouter } from "next/router";
import GoogleAnalytics from "components/app/GoogleAnalytics";
import { ThemeProvider } from "next-themes";

const VoidImpApp = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  const dir = locale === "ar" ? "rtl" : "ltr";
  if (typeof document !== "undefined") {
    document.querySelector("html").setAttribute("dir", dir);
  }

  return (
    <>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      <ThemeProvider
        defaultTheme="dark"
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default VoidImpApp;
