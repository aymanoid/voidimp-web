import Image from "components/common/VoidImage";

const AvatarImage = ({ imageData }) => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-full border border-violet-600/50 p-2 dark:border-violet-400/50">
        <Image
          className="rounded-full"
          src={imageData.url}
          alt={imageData.alternativeText}
          width={144}
          height={144}
          cmsMedia
        />
      </div>
    </div>
  );
};

export default AvatarImage;
