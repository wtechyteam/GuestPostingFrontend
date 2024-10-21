"use client";

import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import Image from "next/image";
import SidebarSeller from "../common/SidebarSeller";
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

export default function AddSocialMedia() {
  const fullName = Cookies.get("fullName");
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("one-account");

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
  const handleSwitch=()=>{
    router.push("/dashboardBuyer")
  }

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

              <h1 className="text-3xl font-bold mb-4 text-gray-700">
                Add Social Media
              </h1>
              <div className="border-b border-gray-200 mb-6">
                <ul className="flex">
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "one-account"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("one-account")}
                    >
                      One Account
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "list-of-accounts"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("list-of-accounts")}
                    >
                      List of Accounts
                    </button>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-10 relative shadow-lg rounded-[14px] min-h-[450px] w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] p-4 mb-[20rem]">
                <div className="mb-8">
                  {activeTab === "one-account" && (
                    <div className="flex flex-col gap-4 w-80">
                      <div className="flex gap-8">
                        <div className="flex flex-col flex-1">
                          <label
                            htmlFor="url"
                            className="font-semibold mb-1 text-gray-900"
                          >
                            URL*
                          </label>
                          <input
                            type="text"
                            id="url"
                            placeholder="Enter URL"
                            style={{
                              border: "1px solid gray",
                              padding: "8px",
                              borderRadius: "12px",
                            }}
                            className="w-[30rem] text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div className="flex flex-col flex-1">
                          <label
                            htmlFor="associated-sites"
                            className="font-semibold mb-1 text-gray-900"
                          >
                            Associated Sites
                          </label>
                          <input
                            type="text"
                            id="associated-sites"
                            placeholder="Enter associated sites"
                            style={{
                              border: "1px solid gray",
                              padding: "8px",
                              borderRadius: "12px",
                            }}
                            className="w-[30rem] text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="price"
                          className="font-semibold mb-1 text-gray-900"
                        >
                          Price*
                        </label>
                        <input
                          type="number"
                          id="price"
                          placeholder="Enter price"
                          style={{
                            border: "1px solid gray",
                            padding: "8px",
                            borderRadius: "12px",
                          }}
                          className="w-full text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button className="bg-indigo-700 w-[50%] text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300">
                        Next
                      </button>
                    </div>
                  )}
                  {activeTab === "list-of-accounts" && (
                    <div className="flex flex-col gap-4 w-80">
                      <div className="flex gap-8">
                        <div className="flex flex-col flex-1">
                          <label
                            htmlFor="url"
                            className="font-semibold mb-1 text-gray-900"
                          >
                            URL*
                          </label>
                          <p className="font-semibold mb-1 text-gray-400 text-sm">
                            Add URLs as a list, with each URL starting from a
                            new line.
                          </p>
                          <textarea
                          id="url"
                          placeholder="Enter URLs, each on a new line"
                          style={{
                            border: "1px solid gray",
                            padding: "8px",
                            borderRadius: "12px",
                            resize: "none",
                          }}
                          className="w-[30rem] h-60 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="flex flex-col flex-1">
                          <label
                            htmlFor="associated-sites"
                            className="font-semibold mb-1 text-gray-900"
                          >
                            Upload Via the file
                          </label>
                          <p className="font-semibold mb-1 text-gray-400 text-sm">
                            Restrictions: Files must be no larger than 2MB, only
                            csv, xls, xlsx
                          </p>
                          <input
                            type="file"
                            id="file-upload"
                            accept=".csv, .xls, .xlsx"
                            style={{
                              border: "1px solid gray",
                              padding: "8px",
                              borderRadius: "12px",
                            }}
                            className="w-[30rem] h-60 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          
                        </div>
                      </div>
                      <button className="bg-indigo-700 w-[50%] text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
