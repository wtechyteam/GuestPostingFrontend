"use client";

import { Img } from "../common/Img";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";

import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import HowItWorks from "./HowItWorks";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Suspense } from "react";
import PublisherSearchSection from "./PublisherSearchSection";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function NotificationPage() {
  const fullName = Cookies.get("fullName");

  // State to handle dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);

  // New state to handle active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };

  const data = [
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateText: "12 Aug, 2024",
    },
  ];

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
                Hey, {fullName ? fullName : "Guest"}.
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
                    <Image
                      src="/images/Flag.png"
                      width={16}
                      height={20}
                      alt="Image"
                      className="h-[20px] w-[24px]"
                    />
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

              <div className="relative">
                <div
                  className="flex flex-col items-center rounded-[20px] bg-warning-200 p-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <Image
                    src="/images/Profile.png"
                    width={32}
                    height={32}
                    alt="Profile Image"
                    className="h-[32px] w-[32px] rounded-[16px] object-cover"
                  />
                </div>

                {isDropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <Link href="/profile-settings" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Profile Settings
                      </a>
                    </Link>
                    <Link href="/logout" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Logout
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-start justify-start gap-7 self-stretch">
          <Sidebar1 />
          <div className="mt-[26px] flex flex-1 flex-col gap-[22px]">
            <HowItWorks
              isHowItWorksVisible={isHowItWorksVisible}
              toggleHowItWorks={toggleHowItWorks}
            />

            <div className="mt-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`py-2 px-4 rounded-full shadow-md border ${
                    activeTab === "tab1"
                      ? "text-blue-500 bg-white border-black"
                      : "text-gray-600 bg-gray-100 border-black"
                  }`}
                  style={{
                    boxShadow:
                      activeTab === "tab1"
                        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1)",
                    marginRight: "12px",
                  }}
                >
                  Order History
                </button>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`py-2 px-4 rounded-full shadow-md border ${
                    activeTab === "tab2"
                      ? "text-blue-500 bg-white border-black"
                      : "text-gray-600 bg-gray-100 border-black"
                  }`}
                  style={{
                    boxShadow:
                      activeTab === "tab2"
                        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1)",
                        marginRight: "12px",
                  }}
                >
                  Order Status
                </button>
                <button
                  onClick={() => setActiveTab("tab3")}
                  className={`py-2 px-4 rounded-full shadow-md border ${
                    activeTab === "tab3"
                      ? "text-blue-500 bg-white border-black"
                      : "text-gray-600 bg-gray-100 border-black"
                  }`}
                  style={{
                    boxShadow:
                      activeTab === "tab3"
                        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Order List
                </button>
              </div>

              <div className="mt-4">
                {activeTab === "tab1" && (
                  <div className="bg-white rounded-[14px] ">
                    <PublisherSearchSection/>
                  </div>
                )}
                {activeTab === "tab2" && (
                 
                    <div className="bg-white rounded-[14px] ">
                    <PublisherSearchSection/>
                  </div>
                  
                )}
                {activeTab === "tab3" && (
                 
                 <div className="bg-white rounded-[14px] ">
                 <PublisherSearchSection/>
               </div>
               
             )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}