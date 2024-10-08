import { Heading } from "./../common/Heading";
import { Button } from "./../common/Button";
import { Img } from "./../common/Img";
import { Text } from "../common/Text";

import BuyerMobileSection from "../common/BuyerMobileSection";
import SellerMobileSection from "../common/SellerMobileSection";
import React, { useState } from "react";

import Image from "next/image";

export default function HowGuestPostingWorks() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
 
  const BuyerImages = [
    {
      src: '/images/mobile2.png', // First image source
      alt: 'First Image',
      caption: 'Join & access numerous guest blog posting platforms of opt-in publishers',
    },
    {
      src: '/images/mobile3.png', // Second image source
      alt: 'Second Image',
      caption: 'Discover exclusive content and guest posting opportunities',
    },
    {
      src: '/images/mobile2.png', // Third image source
      alt: 'Third Image',
      caption: 'Boost your online presence through guest blogging',
    },
  ];
  const SellerImages = [
    {
      src: '/images/mobile3.png', // First image source
      alt: 'First Image',
      caption: 'Join & access numerous guest blog posting platforms of opt-in publishers',
    },
    {
      src: '/images/mobile4.png', // Second image source
      alt: 'Second Image',
      caption: 'Discover exclusive content and guest posting opportunities',
    },
    {
      src: '/images/mobile5.png', // Third image source
      alt: 'Third Image',
      caption: 'Boost your online presence through guest blogging',
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-16"> 
        <div className="container-xs px-[54px] md:px-5">
          <div className="sm:gap-[33px] gap-[66px] mr-[38px] ml-[62px] flex flex-col items-center md:mx-0">
            <Heading
              size="heading4xl"
              as="h2"
              className="sm:text-[35px] md:text-[37px] text-[39.13px] font-bold !text-adsy_com-black text-center leading-[1.5]"
            >
              How Our Guest Posting
              <span className="block md:inline"> Service Works</span>
            </Heading>

            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <BuyerMobileSection images={BuyerImages} />
            </div>
            <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
            <SellerMobileSection images={SellerImages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
