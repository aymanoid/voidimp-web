import Imgix, { Picture, Source } from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const AvatarImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-full border border-violet-600/50 p-2 dark:border-violet-400/50">
        <Imgix
          className="lazyload rounded-full"
          src={imageData.url}
          width={144}
          height={144}
          htmlAttributes={{ alt: imageData.alt }}
          attributeConfig={{
            src: "data-src",
            srcSet: "data-srcset",
            sizes: "data-sizes",
          }}
        />
      </div>
    </div>
  );
};

export default AvatarImage;
