import Image from "next/image";

const HeadingImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex p-2 border rounded-3xl dark:border-violet-500/50 border-violet-600/50">
        <Image
          src={imageData.url}
          alt={imageData.alt}
          width={1920 / 3}
          height={1080 / 3}
          className="rounded-3xl"
          priority
        />
      </div>
    </div>
  );
};

export default HeadingImage;
