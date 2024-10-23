import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { Img } from "../common/Img";
import { Text } from "../common/Text";
import React, { useState } from "react";

import BuyerInfoSection from "./BuyerInfoSection";

import SellerInfoSection from "./SellerInfoSection";
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
           
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <BuyerInfoSection />
            </div>
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <SellerInfoSection />
            </div>
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <SellerInfoSection />
            </div>
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <BuyerInfoSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
