import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <Bars
        visible={true}
        height="40"
        width="40"
        color="#0a1d37"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
