import Container from "@/components/ui/Container";
import { Mail, Phone } from "lucide-react";
import React from "react";

const ContactTopNav = () => {
  return (
    <div>
      <div className="bg-muted text-secondary-foreground hidden md:block py-1">
        <Container>
          <div className="flex justify-between align-center text-center text-xs md:text-sm">
            <ul className="flex">
              <li className=" ">
                <a
                  href="tel:(+880) 1677215739 "
                  className=" flex justify-center items-center  text-decoration-none list-hover"
                >
                  <Phone width={15} height={20} className="me-1" />
                  <span>+8801677215739</span>
                </a>
              </li>
            </ul>
            <a
              href="mailto:iqra.early.learning.daycare@gmail.com"
              className="flex justify-center items-center text-decoration-none list-hover"
            >
              <Mail width={15} height={20} className="me-1" />
              <span>iqra.early.learning.daycare@gmail.com</span>
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactTopNav;
