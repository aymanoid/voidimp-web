import Head from "next/head";
import { useRouter } from "next/router";
import { urlize } from "utils/helpers";

const CommonSEO = ({ title, description, canonicalUrl, ogType, imageData }) => {
  const { locale, asPath } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageData.url} />
      <meta property="og:image:width" content={imageData.dimensions.width} />
      <meta property="og:image:height" content={imageData.dimensions.height} />
      <meta property="og:image:alt" content={imageData.alt} />
      <meta property="og:description" content={description} />
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
