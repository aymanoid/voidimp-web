import Image from "next/image";
import { getCmsURL } from "utils/api";

const VoidImage = ({
  src,
  width,
  height,
  alt,
  className,
  cmsMedia = false,
}) => {
  return (
    <Image
      src={cmsMedia ? getCmsURL(src) : src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default VoidImage;
