import Imgix, { Picture, Source } from "react-imgix";

const HeadingImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-3xl border border-violet-600/50 p-2 dark:border-violet-500/50">
        <figure>
          <Picture>
            <Source
              src={imageData.url}
              width={640}
              height={360}
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
              height={432}
              htmlAttributes={{ media: "(min-width: 640px)" }}
            />
            {/* <Source
              src={imageData.url}
              width={640}
              htmlAttributes={{ media: "(min-width: 0px)" }}
            /> */}
            <Imgix
              className="rounded-3xl"
              src={imageData.url}
              width={640}
              height={360}
              htmlAttributes={{ alt: imageData.alt }}
            />
            {/* TODO: add and stylize figurecaption tag */}
          </Picture>
        </figure>
      </div>
    </div>
  );
};

export default HeadingImage;
