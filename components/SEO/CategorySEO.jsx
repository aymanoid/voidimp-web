import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";

const CategorySEO = ({ categoryName, description, imageData }) => {
  const { locale, asPath } = useRouter();

  const title =
    locale === "en"
      ? `${categoryName} | VoidImp`
      : `\u202B${categoryName} | VoidImp`;
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

export default CategorySEO;
