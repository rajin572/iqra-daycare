import React from "react";
import Container from "../ui/Container";
import AboutUsSection from "../ui/Home/AboutUsSection";
import OurService from "../ui/Home/AboutUsSection/OurService";
import SectionHeader from "../ui/SectionHeader";

const AboutUs = () => {
  return (
    <div className="my-20" id="about-us">
      <Container>
        <SectionHeader heading="ABOUT US" />
        <div className="mt-10">
          <AboutUsSection />
          <OurService />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
