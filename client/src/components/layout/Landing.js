import React from "react";
import Lottie from "react-lottie";
import Typical from "react-typical";
const Landing = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: require("../../utils/108333-coding.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: require("../../utils/40238-happy-coding.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="flex flex-row">
        <Lottie options={defaultOptions1} height={500} width={550} />
        <Lottie options={defaultOptions2} height={500} width={550} />
      </div>
      <div className="font-body">
        <h1 className="text-4xl text-white text-center font-bold">
          Connecting Developers
        </h1>
        <p className="text-center text-white text-2xl mt-4">
          A Platform Where Developers Can{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Connect",
              2000,
              "Post",
              2000,
              "Help",
              2000,
              "Interact",
              2000,
            ]}
          />
        </p>
        <h3 className="text-center text-white text-2xl mt-4">
          Copyright to be added
        </h3>
      </div>
    </>
  );
};

export default Landing;
