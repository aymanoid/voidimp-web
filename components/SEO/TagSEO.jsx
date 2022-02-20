import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";

const TagSEO = ({ tagName, description, imageData }) => {
  const { locale, asPath } = useRouter();

  const title =
    locale === "en" ? `${tagName} | VoidImp` : `\u202B${tagName} | VoidImp`;
  const pageUrl = urlize(asPath, locale);

  return (
    <CommonSEO
      title={title}
      description={description}
      canonicalUrl={pageUrl}
      ogType={"website"}
      imageData={imageData}
    />
  );
};

export default TagSEO;
