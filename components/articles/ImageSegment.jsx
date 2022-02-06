import Imgix from "react-imgix";

const ImageSegment = ({ imageData }) => {
  const width = 426;
  const height =
    width * (imageData.dimensions.height / imageData.dimensions.width);
  return (
    <div className="flex justify-center">
      <Imgix
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
