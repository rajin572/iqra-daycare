"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import galleryImg1 from "@/assets/images/galleryImg1.jpg";
import galleryImg2 from "@/assets/images/galleryImg2.jpg";
import galleryImg3 from "@/assets/images/galleryImg3.jpg";
import galleryImg4 from "@/assets/images/galleryImg4.jpg";
import galleryImg5 from "@/assets/images/galleryImg5.jpg";
import galleryImg6 from "@/assets/images/galleryImg6.jpg";
import galleryImg7 from "@/assets/images/galleryImg7.jpg";
import galleryImg8 from "@/assets/images/galleryImg8.jpg";
import "react-photo-view/dist/react-photo-view.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  {
    id: 1,
    image: galleryImg1,
  },
  {
    id: 2,
    image: galleryImg2,
  },
  {
    id: 3,
    image: galleryImg3,
  },
  {
    id: 4,
    image: galleryImg4,
  },
  {
    id: 5,
    image: galleryImg5,
  },
  {
    id: 6,
    image: galleryImg6,
  },
  {
    id: 7,
    image: galleryImg7,
  },
  {
    id: 8,
    image: galleryImg8,
  },
];

const Gallery = () => {
  return (
    <div className="my-20 py-20 bg-secondary" id="gallery">
      <Container>
        <SectionHeader heading="GALLERY" className="bg-secondary" />
        <div className="mt-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation, Pagination]}
            className="mySwiper text-white"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="mb-20">
                <PhotoProvider>
                  <PhotoView src={image.image.src}>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={image.image}
                      alt=""
                      className="w-72 sm:w-96 h-60 mx-auto"
                    />
                  </PhotoView>
                </PhotoProvider>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
