import { Heading } from "./../common/Heading";
import { Button } from "./../common/Button";
import { Img } from "./../common/Img";
import { Text } from "../common/Text";
import React, { useState } from 'react';

import BuyerInfoSection from "../common/BuyerInfoSection";

import SellerInfoSection from "../common/SellerInfoSection";
import Image from "next/image";
export default function KeyBenefitsSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="mt-16 flex flex-col items-center">
        <div className="container-xs px-[54px] md:px-5">
          <div className="sm:gap-[33px] gap-[66px] mr-[38px] ml-[62px] flex flex-col items-center md:mx-0">
            <Heading
              size="heading4xl"
              as="h2"
              className="sm:text-[35px] md:text-[37px] text-[39.13px] font-bold !text-adsy_com-black"
            >
              11 Key Benefits to Boost Your Business With Collaborator
            </Heading>
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <BuyerInfoSection />
              <SellerInfoSection learnMoreButton="Learn More" />
            </div>
          </div>
          
          </div>
        </div> 
      
    </>
  );
}
