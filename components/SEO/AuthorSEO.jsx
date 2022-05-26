import { useRouter } from "next/router";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";
import { urlize } from "utils/helpers";

const AuthorSEO = ({
  authorName,
  slug,
  currPage,
  prevPage,
  nextPage,
  metaImage,
  metaDescription,
}) => {
  const { locale } = useRouter();

  const canonicalUrl = urlize(
    currPage === 1 ? `/authors/${slug}` : `/authors/${slug}/pages/${currPage}`,
    locale
  );
  const prevUrl = urlize(
    prevPage === 1 ? `/authors/${slug}` : `/authors/${slug}/pages/${prevPage}`,
    locale
  );
  const nextUrl = urlize(`/authors/${slug}/pages/${nextPage}`, locale);

  const schemaData = {
    "@context": "http://schema.org/",
    "@type": "Person",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": urlize(`/authors/${slug}`, locale),
    },
    url: urlize(`/authors/${slug}`, locale),
    name: authorName,
    image: metaImage.url,
    jobTitle: null,
    affiliation: {
      "@type": "Organization",
      name: "VoidImp",
    },
  };

  return (
    <>
      <CommonSEO
        metaTitle={`${authorName} | VoidImp`}
        metaDescription={metaDescription}
        canonicalUrl={canonicalUrl}
        ogType={"profile"}
        metaImage={metaImage}
      />
      <Head>
        <meta property="profile:username" content={slug} />

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

export default AuthorSEO;
