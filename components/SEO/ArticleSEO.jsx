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
  tagsData,
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
    articleSection: tagsData.map((e) => e.id),
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        canonicalUrl={pageUrl}
        ogType={"article"}
        imageData={imageData}
      />
      <Head>
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content={authorName} />
        {/* <meta property="article:section" content="Category" /> */}
        {tagsData.map((e, i) => (
          <meta key={i} property="article:tag" content={e.name} />
        ))}

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
