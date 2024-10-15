"use client";

import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import Image from "next/image";
import SidebarSeller from "../common/SidebarSeller";
import SearchBar from "./searchBar";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";
import HowItWorks from "./HowItWorks";
import Tab1 from "./tab1";
import { useRouter } from "next/navigation";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "option2" },
  { label: "French", value: "option3" },
];

export default function MySocialMedia() {
  const fullName = Cookies.get("fullName");
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleLogout = () => {
    Cookies.remove("fullName");
    router.push("/login");
  };

  const handleLogout2 = () => {
    router.push("/profileDetails");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Switch To Seller
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

              <h1 className="text-3xl font-bold mb-4 text-gray-700">
                My Social Media
              </h1>
              <div className="border-b border-gray-200 mb-6">
                <ul className="flex">
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "all"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("all")}
                    >
                      All
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "pending-specifications"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("pending-specifications")}
                    >
                      Pending Specification
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "pending-moderation"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("pending-moderation")}
                    >
                      Pending Moderation
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "approved"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("approved")}
                    >
                      Approved
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${
                        activeTab === "rejected"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("rejected")}
                    >
                      Rejected
                    </button>
                  </li>
                </ul>
              </div>
              <SearchBar />
            
                <div className="mb-8">
                  {activeTab === "all" && (
                     <div className="mb-[25rem]">
                      <div className="grid grid-cols-4 gap-2 mb-4 ">
                        <h2 className="text-sm font-semibold text-gray-600">
                          URL
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-600">
                          Associated Sites
                        </h2>
                        <div className="flex justify-start gap-44">
                          <h2 className="text-sm font-semibold text-gray-600">
                            Status
                          </h2>
                          <h2 className="text-sm font-semibold text-gray-600">
                            Price
                          </h2>
                        </div>
                      </div>

                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={true}
                        price="10.00"
                      />
                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={false}
                        price="10.00"
                      />
                    </div>
                  )}
                  {activeTab === "pending-specifications" && (
                         <div className="mb-[25rem]">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-gray-600">
                          URL
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-600">
                          Associated Sites
                        </h2>
                        <div className="flex justify-start gap-44">
                          <h2 className="text-sm font-semibold text-gray-600">
                            Status
                          </h2>
                          <h2 className="text-sm font-semibold text-gray-600">
                            Price
                          </h2>
                        </div>
                      </div>

                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={true}
                        price="10.00"
                      />
                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={false}
                        price="10.00"
                      />
                    </div>
                  )}
                  {activeTab === "pending-moderation" && (
                       <div className="mb-[25rem]">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-gray-600">
                          URL
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-600">
                          Associated Sites
                        </h2>
                        <div className="flex justify-start gap-44">
                          <h2 className="text-sm font-semibold text-gray-600">
                            Status
                          </h2>
                          <h2 className="text-sm font-semibold text-gray-600">
                            Price
                          </h2>
                        </div>
                      </div>

                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={true}
                        price="10.00"
                      />
                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={false}
                        price="10.00"
                      />
                    </div>
                  )}
                  {activeTab === "approved" && (
                        <div className="mb-[25rem]">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-gray-600">
                          URL
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-600">
                          Associated Sites
                        </h2>
                        <div className="flex justify-start gap-44">
                          <h2 className="text-sm font-semibold text-gray-600">
                            Status
                          </h2>
                          <h2 className="text-sm font-semibold text-gray-600">
                            Price
                          </h2>
                        </div>
                      </div>

                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={true}
                        price="10.00"
                      />
                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={false}
                        price="10.00"
                      />
                    </div>
                  )}
                  {activeTab === "rejected" && (
                         <div className="mb-[25rem]">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-gray-600">
                          URL
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-600">
                          Associated Sites
                        </h2>
                        <div className="flex justify-start gap-44">
                          <h2 className="text-sm font-semibold text-gray-600">
                            Status
                          </h2>
                          <h2 className="text-sm font-semibold text-gray-600">
                            Price
                          </h2>
                        </div>
                      </div>

                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={true}
                        price="10.00"
                      />
                      <Tab1
                        primaryUrl="https://cp.adsy.com"
                        secondaryUrl="https://adsy.com"
                        status="Pending moderation"
                        isActive={false}
                        price="10.00"
                      />
                    </div>
                  )}
                </div>
                   <Link href="/add-social-media">
                <button className="absolute bottom-4 right-4 bg-gray-900 text-white text-gray-10 px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Add Social Media
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}
