import { useRouter } from "next/router";
import { urlize } from "utils/helpers";
import CommonSEO from "components/SEO/CommonSEO";

const CategorySEO = ({ categoryName, metaDescription, metaImage }) => {
  const { locale, asPath } = useRouter();

  const title =
    locale === "en"
      ? `${categoryName} | VoidImp`
      : `\u202B${categoryName} | VoidImp`;
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

export default CategorySEO;
