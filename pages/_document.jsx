import Document, { Html, Head, Main, NextScript } from "next/document";

class VoidImpDocument extends Document {
  render() {
    return (
      <Html>
        <Head prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article#">
          <link rel="icon" href="/favicon.svg" />
          <link rel="preconnect" href="https://images.prismic.io" />
          <link rel="dns-prefetch" href="https://images.prismic.io" />
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
