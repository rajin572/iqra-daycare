import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Gallery from "@/components/Home/Gallery";
import OurActivity from "@/components/Home/OurActivity";
import OurTeam from "@/components/Home/OurTeam";
import Pricing from "@/components/Home/Pricing";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <OurTeam />
      <Pricing />
      <Gallery />
      <OurActivity />
      <Contact />
    </div>
  );
};

export default HomePage;
