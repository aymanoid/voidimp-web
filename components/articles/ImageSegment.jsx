import Image from "next/image";

const ImageSegment = ({ imageData }) => {
  const width = 426;
  const height =
    width * (imageData.dimensions.height / imageData.dimensions.width);
  return (
    <div className="flex justify-center">
      <Image
        src={imageData.url}
        alt={imageData.alt}
        width={width}
        height={height}
        className="rounded-md"
      />
    </div>
  );
};

export default ImageSegment;
