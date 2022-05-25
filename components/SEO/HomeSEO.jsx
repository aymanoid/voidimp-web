import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";

const HomeSEO = ({ metaTitle, metaDescription, metaImage }) => {
  const { locale, asPath } = useRouter();

  const title =
    locale === "en" ? `VoidImp | ${metaTitle}` : `\u202BVoidImp | ${metaTitle}`;
  const pageUrl = urlize(asPath, locale);

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "@id": "#website",
    url: pageUrl,
    name: "VoidImp",
    potentialAction: {
      "@type": "SearchAction",
      target: `${pageUrl}search/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <CommonSEO
        metaTitle={title}
        metaDescription={metaDescription}
        canonicalUrl={pageUrl}
        ogType={"website"}
        metaImage={metaImage}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
    </>
  );
};

export default HomeSEO;
