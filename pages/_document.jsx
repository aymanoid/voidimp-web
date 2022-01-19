import Document, { Html, Head, Main, NextScript } from "next/document";

class VoidImpDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body className="antialiased bg-white dark:bg-neutral-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default VoidImpDocument;
