"use client";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import Image from "next/image";
import SidebarSeller from "../common/SidebarSeller";
import HowItWorks from "./HowItWorks";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import SearchBar from "./GoogleAnalytics";
import FileUpload from "./FileUpload";
import PostHTMLCode from "./PostHTMLCode";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];
export default function ConfirmOwnershipPage() {
  const fullName = Cookies.get("fullName");

  // State to handle dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const router = useRouter(); // Initialize the router

  const handleLogout = () => {
    // Add your logout logic here, e.g., clear cookies or call an API
    Cookies.remove("fullName");

    // Redirect to the login page after logout
    router.push("/login");
  };
  const handleLogout2 = () => {
    // Redirect to the login page after logout
    router.push("/profileDetails");
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };
  const handleSwitch=()=>{
    router.push("/dashboardBuyer")
  }
    
  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
    <>
      <div className="w-full bg-gray-10 overflow-x-hidden">
        <div className="flex flex-col items-end bg-gray-50_01">
          <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center bg-gray-10 p-1.5 shadow-6xl">
            <div className="mb-1 flex w-[96%] items-center justify-between">
              <div className="flex flex-col items-start">
                <Image
                  src="/images/logo.png"
                  width={56}
                  height={32}
                  alt="Sidebar Logo"
                  className="ml-6 h-[32px] w-[56px] object-contain"
                />
              </div>
              <div className="flex w-[40%] mr-[100px] flex-col items-start sm:w-full  md:ml-0 sm:ml-0">
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

              <div className="flex w-[18%]  ml-4 mr-[-1rem] items-center justify-center gap-4 sm:w-full">
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
                    <div className="absolute right-0 mt-2 w-48 bg-gray-10 border rounded-lg shadow-lg z-50">
                      <button
                        onClick={handleLogout2}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Profile Settings
                      </button>
                      <button
                        onClick={handleSwitch}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Switch To Buyer
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="flex items-start justify-start gap-7 self-stretch mt-[70px]">
            <div className="fixed top-[60px] left-0 h-full bg-white shadow-md z-20">
              <SidebarSeller />
            </div>
            <div className="ml-[300px] mt-[30px] flex flex-1 flex-col gap-7">
              <HowItWorks
                isHowItWorksVisible={isHowItWorksVisible}
                toggleHowItWorks={toggleHowItWorks}
              />
              <div className="mt-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-700 !text-left">
                  Confirm Ownership
                </h1>
                <p className="text-lg font-semi-bold mb-2 text-gray-700 !text-left">
                  Please confirm your ownership of the website by following the
                  instructions.
                </p>
                <p className="text-sm font-semi-bold mb-4 text-gray-700 !text-left">
                  You may skip this step now and get back to verification later.
                </p>

                <div className="border-b border-gray-200 mb-6">
                  <ul className="flex">
                    <li className="mr-6">
                      <button
                        className={`${
                          activeTab === "tab1"
                            ? "text-indigo-600 font-semibold"
                            : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("tab1")}
                      >
                        Google Analytics
                      </button>
                    </li>
                    <li className="mr-6">
                      <button
                        className={`${
                          activeTab === "tab2"
                            ? "text-indigo-600 font-semibold"
                            : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("tab2")}
                      >
                        File Upload
                      </button>
                    </li>
                    <li className="mr-6">
                      <button
                        className={`${
                          activeTab === "tab3"
                            ? "text-indigo-600 font-semibold"
                            : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("tab3")}
                      >
                        Post HTML Code
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  {activeTab === "tab1" && <SearchBar />}
                  {activeTab === "tab2" && <FileUpload />}
                  {activeTab === "tab3" && <PostHTMLCode />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
