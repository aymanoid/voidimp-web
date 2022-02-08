import Imgix, { Picture, Source } from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const HeadingImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full rounded-3xl border border-violet-600/50 p-2 dark:border-violet-500/50 lg:w-1/2">
        <figure className="">
          <Picture>
            <Source
              src={imageData.url}
              width={640}
              htmlAttributes={{ media: "(min-width: 1024px)" }}
            />
            {/* <Source
              src={imageData.url}
              width={768}
              htmlAttributes={{ media: "(min-width: 768px)" }}
            /> */}
            <Source
              src={imageData.url}
              width={768}
              htmlAttributes={{ media: "(min-width: 640px)" }}
            />
            <Source
              src={imageData.url}
              width={640}
              htmlAttributes={{ media: "(min-width: 0px)" }}
            />
            <Imgix
              className="lazyload rounded-3xl"
              src={imageData.url}
              width={imageData.dimensions.width}
              height={imageData.dimensions.height}
              htmlAttributes={{ alt: imageData.alt }}
              attributeConfig={{
                src: "data-src",
                srcSet: "data-srcset",
                sizes: "data-sizes",
              }}
            />
          </Picture>

          {/* TODO: add and stylize figurecaption tag */}
        </figure>
      </div>
    </div>
  );
};

export default HeadingImage;
