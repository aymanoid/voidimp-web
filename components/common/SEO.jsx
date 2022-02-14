import Head from "next/head";
import { useRouter } from "next/router";

const CommonSEO = ({ title, ogType, url, imageData, description }) => {
  const { locale } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

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

const PageSEO = ({ seoData }) => {
  return <CommonSEO title={seoData.title} />;
};

const AuthorSEO = ({
  title,
  username,
  currPage,
  prevPage,
  nextPage,
  imageData,
  description,
}) => {
  const { locale, asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const url = `${origin}${locale === "ar" ? "/ar" : ""}${asPath}`;
  const loc = (href) =>
    locale === "en" ? `${origin}${href}` : `/${locale}${href}`;
  const lao = (href) =>
    locale === "en" ? `${origin}${href}` : `${origin}/${locale}${href}`;

  const canonicalHref =
    currPage === 1
      ? `/authors/${username}`
      : `/authors/${username}/pages/${currPage}`;
  const prevHref =
    prevPage === 1
      ? `/authors/${username}`
      : `/authors/${username}/pages/${prevPage}`;
  const nextHref = `/authors/${username}/pages/${nextPage}`;

  return (
    <>
      <CommonSEO
        title={title}
        ogType={"profile"}
        url={url}
        imageData={imageData}
        description={description}
      />
      <Head>
        <link rel="canonical" href={lao(canonicalHref)} />
        {prevPage && <link rel="prev" href={lao(prevHref)} />}
        {nextPage && <link rel="next" href={lao(nextHref)} />}
      </Head>
    </>
  );
};

export { PageSEO, AuthorSEO };
