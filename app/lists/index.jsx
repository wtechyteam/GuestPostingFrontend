"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import Link from "next/link";
import Cookies from "js-cookie";
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { SelectBox } from "../common/SelectBox";
import HowItWorks from "./HowItWorks";
import { Input } from "./../common/Input";
import PublisherSearchSection from "./PublisherSearchSection";
import { CloseSVG } from "../common/Close";
import { useRouter } from "next/navigation";
import UserProfile3 from "app/common/UserProfile3";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function Wishlist() {
  const fullName = Cookies.get("fullName");
  const [searchBarValue10, setSearchBarValue10] = React.useState("");
  const [publisherValue, setPublisherValue] = React.useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [editableContent, setEditableContent] = useState({
    name: "John Smith",
    location: "India",
    email: "abcd@gmail.com",
    dob: "08 July, 2006",
    contact: "999 9999 999",
  });
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleLogout = () => {
    // Add your logout logic here, e.g., clear cookies or call an API
    Cookies.remove("fullName");

    // Redirect to the login page after logout
    router.push("/login");
  };
  const [activeTab, setActiveTab] = useState("tab1");

  const handleLogout2 = () => {
    // Redirect to the login page after logout
    router.push("/profileDetails");
  };
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };

  const handleInputChange = (e, field) => {
    setEditableContent({ ...editableContent, [field]: e.target.value });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the editable content or perform any cancel logic
  };

  return (
    <div className="w-full h-100% bg-gray-10 overflow-x-hidden">
      <div className="flex flex-col items-end bg-gray-50_01 ">
        <header className="fixed top-0 left-0 w-[100%] z-50 flex items-center justify-center bg-gray-10 p-1.5 shadow-6xl md:w-full">
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
                    <button
                      onClick={handleLogout2}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Profile Details
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

        <div className="flex items-start justify-start gap-7 self-stretch">
          <div className="fixed top-100 mt-[50px] left-0 h-full bg-white shadow-md z-20">
            <Sidebar1 />
          </div>

          <div className="ml-[300px] mt-[100px] flex flex-1 flex-col gap-7">
            <HowItWorks
              isHowItWorksVisible={isHowItWorksVisible}
              toggleHowItWorks={toggleHowItWorks}
            />
            <h1 className="text-3xl font-bold mb-4 text-gray-700 !text-left">
              Lists
            </h1>

            <div className="mt-6">
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
                      Blocked
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
                      Favourites
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                {activeTab === "tab1" && (
                  <>
                   <div className="flex gap-4 p-4 ">
                      <div className="relative w-1/2">
                        <Input
                          color="gray_10"
                          size="xs"
                          name="Search Input"
                          placeholder={`Task ID`}
                          value={searchBarValue10}
                          onChange={(e) => setSearchBarValue10(e.target.value)}
                          prefix={
                            <div className="flex h-[12px] w-[10px] items-center justify-center">
                              <Image
                                src="/images/Group 25811.png"
                                width={10}
                                height={12}
                                alt="Contrast"
                                className="my-0.5 h-[12px] w-[10px]"
                              />
                            </div>
                          }
                          suffix={
                            searchBarValue10?.length > 0 ? (
                              <CloseSVG
                                onClick={() => setSearchBarValue10("")}
                                height={12}
                                width={10}
                              />
                            ) : null
                          }
                          className="w-[84%] gap-3.5 self-center rounded-[14px] border border-solid border-blue_gray-50 !text-gray-400 md:w-full px-3 py-5" // Adjust padding or height
                        />
                      </div>

                      <div className="relative w-1/2">
                        <Input
                          color="gray_10"
                          size="xs"
                          name="Search Input"
                          placeholder={`Publisher's Name`}
                          value={searchBarValue10}
                          onChange={(e) => setSearchBarValue10(e.target.value)}
                          prefix={
                            <div className="flex h-[12px] w-[10px] items-center justify-center">
                              <Image
                                src="/images/Group 25811.png"
                                width={10}
                                height={12}
                                alt="Contrast"
                                className="my-0.5 h-[12px] w-[10px]"
                              />
                            </div>
                          }
                          suffix={
                            searchBarValue10?.length > 0 ? (
                              <CloseSVG
                                onClick={() => setSearchBarValue10("")}
                                height={12}
                                width={10}
                              />
                            ) : null
                          }
                          className="w-[84%] gap-3.5 self-center rounded-[14px] border border-solid border-blue_gray-50 !text-gray-400 md:w-full px-3 py-5" // Adjust padding or height
                        />
                      </div>
                    </div>
                      <UserProfile3/>
                  </>
                )}
               {activeTab === "tab2" && (
                  <>
                   <PublisherSearchSection/>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
