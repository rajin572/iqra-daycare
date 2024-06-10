/* eslint-disable react/no-unescaped-entities */
import React from "react";
import backgroundImage1 from "@/assets/images/banner-1.jpg";
import backgroundImage2 from "@/assets/images/banner-2.jpg";
import backgroundImage3 from "@/assets/images/banner-3.jpg";
import BannerSlider from "../ui/Home/Banner/BannerSlider";

const bannerItems = [
  {
    key: 1,
    image: backgroundImage1?.src,
  },
  {
    key: 2,
    image: backgroundImage2?.src,
  },
  {
    key: 3,
    image: backgroundImage3?.src,
  },
];
const Banner = () => {
  return (
    <div id="home">
      <BannerSlider bannerItems={bannerItems} />
    </div>
  );
};

export default Banner;
