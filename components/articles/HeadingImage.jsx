import Image from "next/image";

const HeadingImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-3xl border border-violet-600/50 p-2 dark:border-violet-500/50">
        <Image
          src={imageData?.url}
          alt={imageData?.alt}
          width={imageData?.dimensions?.width / 3}
          height={imageData?.dimensions?.height / 3}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeadingImage;
