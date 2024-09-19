"use client";

import { Img } from "../common/Img";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import TextContentRow from "../common/TextContentRow";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import { Input } from "../common/Input";
import HowItWorks from "./HowItWorks";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import UserProfile from "app/common/UserProfile";
import UserProfile2 from "app/common/UserProfile2";
import { CloseSVG } from "../common/Close";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function SelectPostsPage() {
  const [searchBarValue10, setSearchBarValue10] = React.useState("");
  const [publisherValue, setPublisherValue] = React.useState("");

  const fullName = Cookies.get("fullName");

  // State to handle dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleLogout = () => {
    // Add your logout logic here, e.g., clear cookies or call an API
    Cookies.remove("fullName");

    // Redirect to the login page after logout
    router.push("/login");
  };

  // New state to handle active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };
  const handleLogout2 = () => {
    // Redirect to the login page after logout
    router.push("/profileDetails");
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
    <div className="w-full bg-gray-10 overflow-x-hidden">
      <div className="flex flex-col items-end bg-gray-50_01">
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
            <h1 className="text-3xl font-bold text-gray-700 !text-left">
              Create a Task
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
                      Content Placement
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
                      Writing and Placement
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                {activeTab === "tab1" && (
                  <>
                    <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[150px] w-[1580px] mb-20 ">
                      <div className="mr-3.5 mt-4 flex flex-col gap-4 md:mr-0 p-6">
                        <p className="text-gray-900 font-bold text-[22px]">
                          Publishers special requirements
                        </p>

                        <Text
                          size="textmd"
                          as="p"
                          className="text-gray-500 text-[16px]"
                        >
                          All articles must be 100% unique and not less than 500
                          words. (no duplicate contents) We do not accept
                          Betting, Casino, Gambling, Poker, Slot, Cannabis,
                          Tobacco, Vaping, Guns/weapons, Pills, Recreational
                          drugs, Supplements, Movie streaming,
                          Negative/defamatory contents, copyrighted contents and
                          images, and adult-related contents or links.
                        </Text>
                      </div>
                    </div>
                    <div className="relative bg-gray-10 shadow-lg rounded-[14px] min-h-[200px] w-[1300px] mb-20 flex justify-center items-center">
                      <div className="p-6">
                        <Text
                          size="textmd"
                          as="p"
                          className="text-gray-500 text-center text-[16px]"
                        >
                          Please Specify any other requirements you have here.
                        </Text>
                      </div>
                    </div>
                    <div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-6 text-gray-500 text-[12px] max-w-xs"
                      style={{ marginTop: "170px" }}
                    >
                      If necessary, you can write additional task requirements
                      here, e.g., deadline, necessity of disclosure, preferences
                      regarding content placement, etc.
                    </div>

                    <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[200px] w-[1580px] mb-20 flex flex-col">
                      <div className="flex flex-col p-6">
                        <div className="flex justify-between items-center mb-4">
                          <Text size="textmd" as="p" className="text-gray-500">
                            Content Placement
                          </Text>
                          <p className="font-normal text-gray-900">$299.00</p>
                        </div>
                        <hr className="border-gray-300 mb-4" />
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700 text-lg font-semibold">
                            Total Price:
                          </p>
                          <p className="font-bold text-gray-900 text-xl">
                            $299.00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 ml-6 mr-2">
                          Send Task
                        </button>
                        <p className="text-gray-400 text-[14px]">
                          As soon as you send the task, the money for it will be
                          reserved on your balance. If you don’t have enough
                          money, the task will be saved as a draft.
                        </p>
                      </div>
                    </div>
                  </>
                )}
               {activeTab === "tab2" && (
                  <>
                    <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[150px] w-[1580px] mb-20 ">
                      <div className="mr-3.5 mt-4 flex flex-col gap-4 md:mr-0 p-6">
                        <p className="text-gray-900 font-bold text-[22px]">
                          Publishers special requirements
                        </p>

                        <Text
                          size="textmd"
                          as="p"
                          className="text-gray-500 text-[16px]"
                        >
                          All articles must be 100% unique and not less than 500
                          words. (no duplicate contents) We do not accept
                          Betting, Casino, Gambling, Poker, Slot, Cannabis,
                          Tobacco, Vaping, Guns/weapons, Pills, Recreational
                          drugs, Supplements, Movie streaming,
                          Negative/defamatory contents, copyrighted contents and
                          images, and adult-related contents or links.
                        </Text>
                      </div>
                    </div>
                    <div className="relative bg-gray-10 shadow-lg rounded-[14px] min-h-[200px] w-[1300px] mb-20 flex justify-center items-center">
                      <div className="p-6">
                        <Text
                          size="textmd"
                          as="p"
                          className="text-gray-500 text-center text-[16px]"
                        >
                          Please Specify any other requirements you have here.
                        </Text>
                      </div>
                    </div>
                    <div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-6 text-gray-500 text-[12px] max-w-xs"
                      style={{ marginTop: "170px" }}
                    >
                      If necessary, you can write additional task requirements
                      here, e.g., deadline, necessity of disclosure, preferences
                      regarding content placement, etc.
                    </div>

                    <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[200px] w-[1580px] mb-20 flex flex-col">
                      <div className="flex flex-col p-6">
                        <div className="flex justify-between items-center mb-4">
                          <Text size="textmd" as="p" className="text-gray-500">
                            Content Placement
                          </Text>
                          <p className="font-normal text-gray-900">$299.00</p>
                        </div>
                        <hr className="border-gray-300 mb-4" />
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700 text-lg font-semibold">
                            Total Price:
                          </p>
                          <p className="font-bold text-gray-900 text-xl">
                            $299.00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 ml-6 mr-2">
                          Send Task
                        </button>
                        <p className="text-gray-400 text-[14px]">
                          As soon as you send the task, the money for it will be
                          reserved on your balance. If you don’t have enough
                          money, the task will be saved as a draft.
                        </p>
                      </div>
                    </div>
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
