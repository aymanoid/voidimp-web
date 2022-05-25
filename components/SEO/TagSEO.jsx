import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";

const TagSEO = ({ tagName, metaDescription, metaImage }) => {
  const { locale, asPath } = useRouter();

  const title =
    locale === "en" ? `${tagName} | VoidImp` : `\u202B${tagName} | VoidImp`;
  const pageUrl = urlize(asPath, locale);

  return (
    <CommonSEO
      metaTitle={title}
      metaDescription={metaDescription}
      canonicalUrl={pageUrl}
      ogType={"website"}
      metaImage={metaImage}
    />
  );
};

export default TagSEO;
