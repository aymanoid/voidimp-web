import { useRouter } from "next/router";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";
import { urlize } from "utils/helpers";

const AuthorSEO = ({
  authorName,
  username,
  currPage,
  prevPage,
  nextPage,
  imageData,
  description,
}) => {
  const { locale } = useRouter();

  const title = `${authorName} | VoidImp`;

  const canonicalUrl = urlize(
    currPage === 1
      ? `/authors/${username}`
      : `/authors/${username}/pages/${currPage}`,
    locale
  );
  const prevUrl = urlize(
    prevPage === 1
      ? `/authors/${username}`
      : `/authors/${username}/pages/${prevPage}`,
    locale
  );
  const nextUrl = urlize(`/authors/${username}/pages/${nextPage}`, locale);

  const schemaData = {
    "@context": "http://schema.org/",
    "@type": "Person",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": urlize(`/authors/${username}`, locale),
    },
    url: urlize(`/authors/${username}`, locale),
    name: authorName,
    image: imageData.url,
    jobTitle: null,
    affiliation: {
      "@type": "Organization",
      name: "VoidImp",
    },
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        ogType={"profile"}
        imageData={imageData}
      />
      <Head>
        <meta property="profile:username" content={username} />

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
