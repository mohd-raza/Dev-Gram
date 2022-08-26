import React from "react";
import Lottie from "react-lottie";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../utils/97111-loading-spinner-dots.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default Spinner;
