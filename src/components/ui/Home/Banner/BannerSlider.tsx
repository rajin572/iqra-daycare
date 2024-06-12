"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Container from "../../Container";
import Link from "next/link";
import { Button } from "../../button";
import { IBannerItems } from "../../../../../types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = ({ bannerItems }: { bannerItems: IBannerItems[] }) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {bannerItems?.map((bannerItem) => (
          <SwiperSlide key={bannerItem?.key}>
            <div
              className="bg-no-repeat h-screen flex justify-center items-center text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerItem?.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundOrigin: "contentBox",
                backgroundSize: "cover",
              }}
            >
              <Container>
                <div className="flex justify-center items-center text-center flex-col">
                  <h4 className="text-secondary text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Welcome to Iqra Daycare
                  </h4>
                  <h2 className="text-xl lg:text-2xl text-white mb-6">
                    Nurturing Young Minds, <br />
                    One Step at a Time
                  </h2>
                  <p className="text-white text-sm md:text-base mb-10 lg:w-[70%] mx-auto">
                    At Iqra Daycare, we understand that early childhood is a
                    critical time for development and learning. Our dedicated
                    team provides a safe, loving, and stimulating environment
                    where your child can thrive.
                  </p>
                  <div>
                    <Link href="#contact">
                      <Button className="bg-secondary text-white hover:bg-accent">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
