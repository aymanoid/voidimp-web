import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";
import Head from "next/head";
import { getCmsURL } from "utils/api";

const ArticleSEO = ({
  metaTitle,
  metaDescription,
  headline,
  subheadline,
  metaImage,
  publishedAt,
  updatedAt,
  authorName,
  authorUsername,
  tagsData,
  categoryName,
}) => {
  const { locale, asPath } = useRouter();

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
    description: subheadline,
    image: getCmsURL(metaImage.url),
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: urlize(`/authors/${authorUsername}`, locale),
    },
    publisher: {
      "@type": "Organization",
      name: "VoidImp",
    },
    articleSection: tagsData.map((e) => e.slug),
  };

  return (
    <>
      <CommonSEO
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        canonicalUrl={pageUrl}
        ogType={"article"}
        metaImage={metaImage}
      />
      <Head>
        <meta property="article:published_time" content={publishedAt} />
        <meta property="article:modified_time" content={updatedAt} />
        <meta property="article:author" content={authorName} />
        <meta property="article:section" content={categoryName} />
        {tagsData.map((e) => (
          <meta key={e.slug} property="article:tag" content={e.name} />
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
