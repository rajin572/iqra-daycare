import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import OurTeam from "@/components/Home/OurTeam";
import OurActivity from "@/components/ui/Home/AboutUsSection/OurActivity";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <OurTeam />
      <OurActivity />
    </div>
  );
};

export default HomePage;
