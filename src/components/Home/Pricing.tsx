import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const tutions = [
  {
    id: 1,
    title: "Daily Pass",
    price: 500,
    time: "6 hours",
    facilities: [
      "Walk-ins welcome",
      "Daily 6 Hour",
      "Friday & Saturday Weekly Off",
      "Bonus Activities",
      "100 % Flexible",
      "No Discount",
    ],
  },
  {
    id: 2,
    title: "Weekly  Pass",
    price: 2500,
    time: "Per Week",
    facilities: [
      "Walk-ins welcome",
      "Daily 6 Hour",
      "Friday & Saturday Weekly Off",
      "Bonus Activities",
      "100 % Flexible",
      "No Discount",
    ],
  },
  {
    id: 3,
    title: "Monthly Pass",
    price: 10000,
    time: "Per Monthly",
    facilities: [
      "Walk-ins welcome",
      "Daily 6 Hour",
      "Friday & Saturday Weekly Off",
      "Bonus Activities",
      "100 % Flexible",
      "10% Discount",
    ],
  },
  {
    id: 4,
    title: "Family Pass",
    price: 15000,
    time: "Per Monthly",
    facilities: [
      "Valid for 3 children",
      "Daily 6 Hour",
      "Friday & Saturday Weekly Off",
      "Bonus Activities",
      "100 % Flexible",
      "10% Discount",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="my-20" id="pricing">
      <Container>
        <SectionHeader heading="TUITION" />
        <div className="mt-10">
          <section>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 xl:gap-5 items-stretch justify-items-center  grid-rows-subgrid">
                {/* Pricing Card  */}
                {tutions.map((tution, i) => (
                  <div
                    key={i}
                    className="sm:w-72 xl:w-[280px] flex flex-col p-6 text-center text-primary-foreground bg-[#FDF5E6] 
                    hover:bg-[#19AA5F] rounded-lg shadow shadow-muted xl:p-8 group duration-500 ease-in-out transition-all "
                  >
                    <h3 className="mb-4 text-2xl font-extrabold text-[#666666] group-hover:text-secondary-foreground duration-500 ease-in-out transition-all">
                      {tution.title}
                    </h3>
                    <div className=" my-2">
                      <div className="mr-4 text-3xl font-semibold text-secondary group-hover:text-secondary-foreground duration-500 ease-in-out transition-all">
                        <span className="font-extrabold">৳</span>
                        {tution.price}
                      </div>
                      <div className="text-gray-500 group-hover:text-secondary-foreground duration-500 ease-in-out transition-all">
                        /{tution.time}
                      </div>
                    </div>

                    <ul role="list" className="mb-8 space-y-4 text-left">
                      {tution.facilities.map((facilitie, i) => (
                        <li
                          className="text-sm flex items-center space-x-3 group-hover:text-secondary-foreground duration-500 ease-in-out transition-all"
                          key={i}
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 group-hover:text-secondary-foreground duration-500 ease-in-out transition-all"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{facilitie}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
