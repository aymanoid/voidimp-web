import "styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "utils/gtag";
import { ThemeProvider } from "next-themes";

const VoidImpApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV === "production") gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const dir = router.locale === "ar" ? "rtl" : "ltr";
  if (typeof document !== "undefined") {
    document.querySelector("html").setAttribute("dir", dir);
  }

  return (
    <ThemeProvider
      defaultTheme="dark"
      forcedTheme={Component.theme || undefined}
      attribute="class"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default VoidImpApp;
