"use client";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CompareSlider = () => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/input.jpg" />}
      itemTwo={<ReactCompareSliderImage src="/output.png" />}
    />
  );
};

export default CompareSlider;
