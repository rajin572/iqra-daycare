import React from "react";
import Container from "../ui/Container";
import ContactFrom from "../ui/Home/Contact/ContactFrom";
import ContactGridCard from "../ui/Home/Contact/ContactGridCard";
import SectionHeader from "../ui/SectionHeader";

const Contact = () => {
  return (
    <div className="mt-20 py-20 bg-[#FDF5E6]" id="contact">
      <Container>
        <SectionHeader heading="CONTACT US" className="bg-[#FDF5E6]" />
        <div className="mt-10">
          <div>
            <ContactGridCard />
          </div>
          <div>
            <SectionHeader
              heading="Send Us a Message"
              className="bg-[#FDF5E6]"
            />
          </div>
          <div className="mt-10">
            <ContactFrom />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
