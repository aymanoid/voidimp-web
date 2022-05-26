import Image from "next/image";
import { getCmsURL } from "utils/api";

const VoidImage = (props) => {
  props.src = props.cmsMedia ? getCmsURL(props.src) : props.src;
  return <Image {...props} />;
};

export default VoidImage;
