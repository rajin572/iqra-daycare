"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import teacher from "@/assets/images/team2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const teachers = [
  {
    id: 1,
    image: teacher.src,
    name: "Faruk Ahmed",
    designation: "Founder",
  },
  {
    id: 2,
    image: teacher.src,
    name: "Noyon Ahmed",
    designation: "Teacher",
  },
  {
    id: 3,
    image: teacher.src,
    name: "Shahid Ahmed",
    designation: "Teacher",
  },
  {
    id: 4,
    image: teacher.src,
    name: "Habib Ahmed",
    designation: "Teacher",
  },
];

const OurTeamSlider = () => {
  return (
    <div className="mt-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {teachers.map((teacher) => (
          <SwiperSlide className="" key={teacher.id}>
            <div className="w-full relative group flex items-center justify-center flex-col">
              <div className="bg-white w-40 h-40 sm:w-52 sm:h-52 p-2 border-8 rounded-full mx-auto border-secondary duration-500">
                <Image
                  src={teacher.image}
                  alt="my-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="-mt-8 ml-24">
                <div className="w-max p-3 bg-secondary text-white rounded-md mx-auto duration-500">
                  <h1 className="sm:text-xl">{teacher.name}</h1>
                  <p className="text-sm">{teacher.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeamSlider;
