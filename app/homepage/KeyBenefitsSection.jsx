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
          {/* <div className="mt-[182px] ml-6 flex items-center md:ml-0 md:flex-col">
            <div className="gap-[26px] flex flex-1 flex-col items-start md:self-stretch">
              <Heading
                size="heading2xl"
                as="h3"
                className="sm:text-[22px] md:text-[24px] text-[26.08px] font-bold !text-adsy_com-black"
              >
                Streamline Team Collaboration
              </Heading>
              
              <div className="gap-[34px] mx-6 flex flex-col items-start self-stretch md:mx-0">
                <div
                  onClick={() => handleSelect(0)}
                  className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
                    selectedIndex === 0 ? 'shadow-lg' : 'hover:shadow-lg'
                  }`}
                >
                  <Text
                    size="text4xl"
                    as="p"
                    className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
                  >
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </Text>
                </div>

                <div
                  onClick={() => handleSelect(1)}
                  className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
                    selectedIndex === 1 ? 'shadow-lg' : 'hover:shadow-lg'
                  }`}
                >
                  <Text
                    size="text4xl"
                    as="p"
                    className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
                  >
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </Text>
                </div>

                <div
                  onClick={() => handleSelect(2)}
                  className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
                    selectedIndex === 2 ? 'shadow-lg' : 'hover:shadow-lg'
                  }`}
                >
                  <Text
                    size="text4xl"
                    as="p"
                    className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
                  >
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </Text>
                </div>

                <div
                  onClick={() => handleSelect(3)}
                  className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
                    selectedIndex === 3 ? 'shadow-lg' : 'hover:shadow-lg'
                  }`}
                >
                  <Text
                    size="text4xl"
                    as="p"
                    className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
                  >
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </Text>
                </div>
              </div>
            </div>
            <Image
              src="/images/image 6.png"
              width={570}
              height={598}
              alt="Collaboration Image"
              className="rounded-[22px] w-[46%] h-[598px] object-contain md:w-full"
            />
          </div>
          <div className="mt-[228px] ml-6 flex items-center md:ml-0 md:flex-col">
            <Image
              src="/images/image 7.png"
              width={570}
              height={598}
              alt="Feature Image"
              className="rounded-[22px] w-[46%] h-[598px] object-contain md:w-full"
            />
            <div className="flex-1 md:self-stretch">
              <div className="flex flex-col items-center">
                <div className="gap-[30px] w-[86%] flex flex-col items-start self-end md:w-full">
                <Heading
  size="heading2xl"
  as="h4"
  className="heading-left sm:text-[22px] md:text-[24px] text-[26.08px] font-bold !text-adsy_com-black mb-[1rem] ml-[-3.5rem]"
>
  Streamline Team Collaboration
</Heading>

                  
                </div>
                <div className="gap-[34px] mx-6 flex flex-col items-end self-stretch md:mx-0 ml-[4.2rem]">
  <div
    onClick={() => handleSelect(0)}
    className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
      selectedIndex === 0 ? 'shadow-lg' : 'hover:shadow-lg'
    }  `}
  >
    <Text
      size="text4xl"
      as="p"
      className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full mr-[2rem]"
    >
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
    </Text>
  </div>

  <div
    onClick={() => handleSelect(1)}
    className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
      selectedIndex === 1 ? 'shadow-lg' : 'hover:shadow-lg'
    } mr-[16px]`}
  >
    <Text
      size="text4xl"
      as="p"
      className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
    >
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
    </Text>
  </div>

  <div
    onClick={() => handleSelect(2)}
    className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
      selectedIndex === 2 ? 'shadow-lg' : 'hover:shadow-lg'
    }  mr-[40px]`}
  >
    <Text
      size="text4xl"
      as="p"
      className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
    >
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
    </Text>
  </div>

  <div
    onClick={() => handleSelect(3)}
    className={`rounded-[12px] p-3 cursor-pointer transition-shadow duration-300 ${
      selectedIndex === 3 ? 'shadow-lg' : 'hover:shadow-lg'
    } mr-[40px]`}
  >
    <Text
      size="text4xl"
      as="p"
      className="leading-[27px] text-[18.26px] w-[84%] !font-poppins2 font-normal !text-adsy_com-black md:w-full"
    >
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
    </Text>
  </div>
</div>

            </div>
                
              </div>
            </div>*/}
          </div>
        </div> 
      
    </>
  );
}
