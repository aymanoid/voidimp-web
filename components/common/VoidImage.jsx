import Image from "next/image";
import { getCmsURL } from "utils/api";

const VoidImage = (props) => {
  const imgProps = { ...props };
  imgProps.src = imgProps.cmsMedia ? getCmsURL(imgProps.src) : imgProps.src;
  return <Image {...imgProps} />;
};

export default VoidImage;
