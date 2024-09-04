"use client";

import { Img } from "../common/Img";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import OrderSummarySection from "./OrderSummarySection";
import PublisherSearchSection from "./PublisherSearchSection";
import Link from "next/link";
import React from "react";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function DashboardPage() {
  return (
    <div className="w-full bg-gray-10 overflow-x-hidden">
      <div className="flex flex-col items-end bg-gray-50_01">
        <header className="flex w-[100%] items-center justify-center bg-gray-10 p-1.5 shadow-6xl md:w-full">
          <div className="mb-1 flex w-[96%] items-center justify-between md:w-full sm:flex-col">
            <div className="flex w-[100%] flex-col items-start sm:w-full">
            <Image
        src="/images/logo.png"
        width={56}
        height={32}
        alt="Sidebar Logo"
        className="ml-6 h-[32px] w-[56px] object-contain"
      />
      </div>
      <div className="flex w-full flex-col items-start sm:w-full ml-[-65rem]">
  <Heading
    size="heading2xl"
    as="h6"
    className="!font-publicsans !font-semibold !text-gray-900"
  >
    Hey, Kevin.
  </Heading>
  <div className="flex">
    <Text size="textmd" as="p" className="!text-gray-600">
      Here is all your Relik analytics overview
    </Text>
  </div>
</div>

            <div className="flex w-[18%] items-center justify-center gap-4 sm:w-full">
        
               
            <SelectBox
  color="gray_50"
  size="sm"
  indicator={
    <Image
      src="/images/CaretDown.png"
      width={24}
      height={20}
      alt="Arrow Down"
      className="h-[20px] w-[24px] ml-2"
    />
  }
  getOptionLabel={(e) => (
    <div className="flex items-center">
      <Image src="/images/Flag.png" width={16} height={20} alt="Image" className="h-[20px] w-[24px]" />
      <span className="ml-2">{e.label}</span>
    </div>
  )}
  name="Language Dropdown"
  placeholder={`English`}
  options={dropDownOptions}
  defaultValue={dropDownOptions[0]}
  className="flex-grow rounded-lg font-publicsans bg-gray-100 px-4 py-2 my-2"
/>


              <Link href="#">
                <Image
                  src="/images/Icon.png"
                  width={20}
                  height={20}
                  alt="Notification Icon"
                  className="h-[20px] w-[16px]"
                />
              </Link>
              <div className="flex flex-col items-center rounded-[20px] bg-warning-200 p-1">
                <Link href="#">
                  <Image
                    src="/images/Profile.png"
                    width={32}
                    height={32}
                    alt="Profile Image"
                    className="h-[32px] w-[32px] rounded-[16px] object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="flex items-start justify-start gap-7 self-stretch">
          <Sidebar1 />
          <div className="mt-[18px] flex flex-1 flex-col gap-7">
            <OrderSummarySection />
            <PublisherSearchSection />
          </div>
        </div>
      </div>
    </div>
  );
}
