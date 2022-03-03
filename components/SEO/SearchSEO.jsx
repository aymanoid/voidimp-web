import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";

const SearchSEO = ({
  currPage,
  prevPage,
  nextPage,
  title,
  description,
  imageData,
}) => {
  const { locale, query } = useRouter();

  const canonicalUrl = urlize(
    currPage === 1
      ? `/search?q=${query.q}`
      : `/search?q=${query.q}&page=${currPage}`,
    locale
  );
  const prevUrl = urlize(
    currPage === 1
      ? `/search?q=${query.q}`
      : `/search?q=${query.q}&page=${prevPage}`,
    locale
  );
  const nextUrl = urlize(`/search?q=${query.q}&page=${nextPage}`, locale);

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "@id": "#website",
    url: canonicalUrl,
    name: "VoidImp",
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        ogType={"website"}
        imageData={imageData}
      />
      <Head>
        <meta name="robots" content="noindex" />

        {prevPage && <link rel="prev" href={prevUrl} />}
        {nextPage && <link rel="next" href={nextUrl} />}

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

export default SearchSEO;
