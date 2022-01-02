import Document, { Html, Head, Main, NextScript } from "next/document";

class VoidImpDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased bg-neutral-400 text-grey-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default VoidImpDocument;
