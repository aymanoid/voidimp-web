import Image from "components/common/VoidImage";

const ImageSegment = ({ imageData }) => {
  const width = 426;
  const height = width * (imageData.height / imageData.width);
  return (
    <div className="flex justify-center">
      <Image
        src={imageData.url}
        width={width}
        height={height}
        alt={imageData.alternativeText}
        className="rounded-md"
        cmsMedia
      />
    </div>
  );
};

export default ImageSegment;
