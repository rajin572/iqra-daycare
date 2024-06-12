/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const AboutUsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-between items-stretch gap-2 lg:gap-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-secondary">
            About our Daycare
          </h1>
          <p className="text-slate-700 dark:text-slate-400">
            Welcome to Iqra Daycare, where we nurture and care for your little
            ones with love and dedication. Our mission is to provide a safe,
            stimulating, and educational environment for children from infancy
            to preschool age. At Iqra Daycare, we believe in fostering a
            community where every child feels valued, inspired, and ready to
            embark on a lifelong journey of learning. With our qualified staff,
            engaging activities, and a focus on holistic development, we ensure
            that each day is filled with fun, exploration, and growth. Trust
            Iqra Daycare to be your partner in your child's early education and
            development.
          </p>
        </div>
        <div className="w-full min-h-64 max-h-96">
          {isClient && (
            <ReactPlayer
              url={"https://youtube.com/shorts/B5JkxDEwQbs?feature=share"}
              controls
              width="100%"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
