import Image from "next/image";

const HeadingImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <figure className="flex w-full rounded-3xl border border-violet-600/50 p-2 dark:border-violet-400/50 lg:w-1/2">
        <Image
          src={imageData.url}
          alt={imageData.alt}
          width={768}
          height={768 / (16 / 9)}
          className="rounded-3xl"
          priority
        />
        {/* TODO: delete imageData.dimensions */}

        {/* TODO: add and stylize figurecaption tag */}
      </figure>
    </div>
  );
};

export default HeadingImage;
