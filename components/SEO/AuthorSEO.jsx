import { useRouter } from "next/router";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";

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

export default AuthorSEO;
