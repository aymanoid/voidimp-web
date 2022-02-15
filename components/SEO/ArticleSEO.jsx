import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";

const ArticleSEO = ({
  headline,
  description,
  imageData,
  datePublished,
  dateModified,
  authorName,
  authorUsername,
  tagIds,
}) => {
  const { locale, asPath } = useRouter();

  const title = `${headline} | VoidImp`;
  const pageUrl = urlize(asPath, locale);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    name: headline,
    headline: headline,
    description: description,
    image: imageData.url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: urlize(`/authors/${authorUsername}`, locale),
    },
    publisher: {
      "@type": "Organization",
      name: "VoidImp",
    },
    articleSection: tagIds,
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        canonicalUrl={pageUrl}
        ogType={"article"}
        url={pageUrl}
        imageData={imageData}
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

export default ArticleSEO;
