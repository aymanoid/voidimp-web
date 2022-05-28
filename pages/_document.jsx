import Document, { Html, Head, Main, NextScript } from "next/document";

class VoidImpDocument extends Document {
  render() {
    return (
      <Html>
        <Head prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8b5cf6" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#1e1e1e" />
        </Head>
        <body className="bg-white antialiased dark:bg-neutral-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default VoidImpDocument;
