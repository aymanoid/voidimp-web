import "styles/globals.css";
import { ThemeProvider } from "next-themes";

const VoidImpApp = ({ Component, pageProps }) => {
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
