import React from "react";
import OurTeamSlider from "../ui/Home/OurTeam/OurTeamSlider";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const OurTeam = () => {
  return (
    <div className="bg-[#FFDFA5] py-20" id="ourteam">
      <Container>
        <SectionHeader heading="OUR TEAM" className="bg-[#FFDFA5]" />
        <div className="mt-10">
          <OurTeamSlider />
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
