import Head from "next/head";
import { useRouter } from "next/router";

const CommonSEO = ({
  title,
  description,
  canonicalUrl,
  ogType,
  url,
  imageData,
}) => {
  const { locale } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageData.url} />
      <meta property="og:image:alt" content={imageData.alt} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:locale:alternate"
        content={locale === "en" ? "ar" : "en"}
      />
      <meta property="og:site_name" content="VoidImp"></meta>
    </Head>
  );
};

export default CommonSEO;
