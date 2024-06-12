import Image from "next/image";
import React from "react";
import activityImage from "@/assets/images/banner-2.jpg";
import SectionHeader from "../ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Container from "../ui/Container";

const OurActivity = () => {
  return (
    <div className="mt-20">
      <Container>
        <SectionHeader heading="OUR ACTIVITIES" />
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-items-between items-start gap-5 mt-10">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                className="bg-[#19AA5F] hover:bg-secondary text-secondary-foreground rounded-md  duration-500 text-sm  shadow-lg mb-2"
                value="item-1"
              >
                <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                  Math Class
                </AccordionTrigger>
                <AccordionContent className="bg-white text-primary-foreground px-2 py-4">
                  At Iqra Daycare, our math program is designed to cultivate a
                  strong foundation in numeracy through engaging and interactive
                  activities. We introduce children to number recognition and
                  counting using fun games and catchy songs, making learning
                  enjoyable. Basic arithmetic skills, such as simple addition
                  and subtraction, are taught with visual aids and everyday
                  objects to ensure concepts are relatable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-[#19AA5F] hover:bg-secondary text-secondary-foreground rounded-md  duration-500 text-sm  shadow-lg  mb-2"
                value="item-2"
              >
                <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                  English Class
                </AccordionTrigger>
                <AccordionContent className="bg-white text-primary-foreground px-2 py-4">
                  At Iqra Daycare, our English class is designed to instill a
                  love for language and literacy from an early age. We focus on
                  developing essential language skills through a variety of
                  engaging activities. Storytime sessions introduce children to
                  a world of imagination and vocabulary, enhancing their
                  listening and comprehension abilities
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-[#19AA5F] hover:bg-secondary text-secondary-foreground rounded-md  duration-500 text-sm  shadow-lg  mb-2"
                value="item-3"
              >
                <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                  Nap Time
                </AccordionTrigger>
                <AccordionContent className="bg-white text-primary-foreground px-2 py-4">
                  Nap time at Iqra Daycare is a crucial part of our daily
                  routine, providing children with the rest they need to
                  recharge and grow. In our cozy nap area, children are provided
                  with comfortable bedding and a soothing environment conducive
                  to relaxation. Soft music or gentle stories may accompany this
                  time to help ease children into a peaceful sleep.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-[#19AA5F] hover:bg-secondary text-secondary-foreground rounded-md  duration-500 text-sm  shadow-lg  mb-2"
                value="item-4"
              >
                <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                  Drawing Class
                </AccordionTrigger>
                <AccordionContent className="bg-white text-primary-foreground px-2 py-4">
                  Drawing activities at Iqra Daycare offer children a creative
                  outlet for self-expression and imagination. Our art program
                  encourages exploration and experimentation with various
                  materials and techniques, fostering confidence and fine motor
                  skills development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-[#19AA5F] hover:bg-secondary text-secondary-foreground rounded-md  duration-500 text-sm  shadow-lg  mb-2"
                value="item-5"
              >
                <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                  Arabic Class
                </AccordionTrigger>
                <AccordionContent className="bg-white text-primary-foreground px-2 py-4">
                  Our Arabic Class at Iqra Daycare offers children a valuable
                  opportunity to learn and appreciate the Arabic language.
                  Through interactive and engaging activities, children are
                  introduced to basic vocabulary, pronunciation, and simple
                  phrases. Our experienced instructors use fun methods such as
                  songs, stories, and games to make learning Arabic enjoyable
                  and effective. The curriculum is designed to enhance
                  listening, speaking, and early reading skills, while also
                  introducing children to the rich cultural heritage associated
                  with the language.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="order-first">
            <Image
              src={activityImage}
              alt="my-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-h-96 lg:min-h-96"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurActivity;
