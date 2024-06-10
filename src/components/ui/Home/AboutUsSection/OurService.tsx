import React from "react";
import service1 from "@/assets/images/service1.jpg";
import service2 from "@/assets/images/service2.jpg";
import service3 from "@/assets/images/service3.jpg";
import Image from "next/image";

const services = [
  {
    id: 1,
    image: service1,
    title: "Babies",
    description:
      "Our school-age program at Iqra Daycare offers a stimulating and supportive environment for children as they transition from school to after-school care. We provide a balance of structured activities and free play to promote learning, creativity, and social development.",
  },
  {
    id: 2,
    image: service2,
    title: "Toddler",
    description:
      "Our toddler program at Iqra Daycare provides a nurturing and stimulating environment tailored to the unique needs of children aged 18 months to 3 years old. We prioritize safety, comfort, and individualized care, ensuring that each toddler receives the attention and support they need to thrive.",
  },
  {
    id: 3,
    image: service3,
    title: "Pre Schools",
    description:
      "Our preschool program at Iqra Daycare offers a dynamic and engaging early childhood education experience for children aged 3 to 5 years old. We believe in providing a nurturing environment where children can learn, grow, and explore at their own pace.",
  },
];

const OurService = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-items-center  grid-rows-subgrid">
        {services.map((service, i) => (
          <div
            className={`${
              i == 0 ? "bg-[#E21C3F]" : i == 1 ? "bg-[#19AA5F]" : "bg-muted"
            } text-center p-5 w-72 sm:w-80 xl:w-96 border rounded-2xl shadow-lg text-white group`}
            key={service.id}
          >
            <Image
              src={service.image}
              alt="my-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-60 h-60 rounded-full mx-auto group-hover:-rotate-[15deg] duration-500"
            />
            <h1 className="my-5 text-2xl font-bold">{service.title}</h1>
            <p className="break-words text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
