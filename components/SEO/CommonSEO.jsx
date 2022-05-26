import Head from "next/head";
import { useRouter } from "next/router";
import { getCmsURL } from "utils/api";
import { urlize } from "utils/helpers";

const CommonSEO = ({
  metaTitle,
  metaDescription,
  canonicalUrl,
  ogType,
  metaImage,
}) => {
  const { locale, asPath } = useRouter();

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={getCmsURL(metaImage.url)} />
      <meta property="og:image:width" content={metaImage.width} />
      <meta property="og:image:height" content={metaImage.height} />
      <meta property="og:image:alt" content={metaImage.alternativeText} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:locale:alternate"
        content={locale === "en" ? "ar" : "en"}
      />
      <meta property="og:site_name" content="VoidImp" />

      <link rel="alternate" hrefLang="x-default" href={urlize(asPath, "en")} />
      <link rel="alternate" hrefLang="en" href={urlize(asPath, "en")} />
      <link rel="alternate" hrefLang="ar" href={urlize(asPath, "ar")} />
    </Head>
  );
};

export default CommonSEO;
