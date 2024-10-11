"use client";
import { Suspense } from "react";
import TextContentRow from "../common/TextContentRow";
import { Img } from "../common/Img";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import OrderSummarySection from "./OrderSummarySection";
import PublisherSearchSection from "./PublisherSearchSection";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";
import HowItWorks from "./HowItWorks";
import { useRouter } from "next/navigation";
import PaymentInfo from "app/common/PaymentInfo";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function DashboardPage() {
  const fullName = Cookies.get("fullName");
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

  // State to handle dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState("tab1");
  const data = [
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted ",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted ",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted ",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted ",
      dateText: "12 Aug, 2024",
    },
    // {
    //   longText: "It is a long established",
    //   descriptionText:
    //     "It is a long established fact that a reader will be distracted ",
    //   dateText: "12 Aug, 2024",
    // },
    // {
    //   longText: "It is a long established",
    //   descriptionText:
    //     "It is a long established fact that a reader will be distracted",
    //   dateText: "12 Aug, 2024",
    // },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted ",
      dateText: "12 Aug, 2024",
    },
    {
      longText: "It is a long established",
      descriptionText:
        "It is a long established fact that a reader will be distracted",
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
                      Profile Settings
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

        <div className="flex items-start">
          {/* Fixed Sidebar */}
          <div className="fixed top-100 mt-[50px] left-0 h-full bg-white shadow-md z-20">
            <Sidebar1 />
          </div>

          {/* Main Content */}
          <div className=" w-[72rem] ml-[-18px] mr-[-1rem] mt-[80px] flex flex-1 flex-col gap-7">
            <HowItWorks
              isHowItWorksVisible={isHowItWorksVisible}
              toggleHowItWorks={toggleHowItWorks}
            />
            <OrderSummarySection />
            <h1 className="text-3xl font-bold text-gray-700 !text-left">
              Payment Information
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
                      All Payments
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
                      Added Funds
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
                      Product Payments
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab4"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab4")}
                    >
                      Refunds
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab5"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab5")}
                    >
                      Others
                    </button>
                  </li>
                </ul>
              </div>
              <div
                className="flex mx-auto justify-between mb-3"
                style={{ maxWidth: "1110px" }}
              >
                <Heading
                  size="textsm"
                  as="p"
                  className="text-gray-600 flex-none w-[15%]"
                >
                  Date
                </Heading>
                <Heading
                  size="textsm"
                  as="p"
                  className="text-gray-600 flex-1 text-center"
                >
                  Transaction Description
                </Heading>
                {/* Add more space for the gap and align Transaction Amount to the right */}
                <Heading
                  size="textsm"
                  as="p"
                  className="text-gray-600 flex-none w-[20%] text-right"
                >
                  Transaction Amount
                </Heading>
                <Heading
                  size="textsm"
                  as="p"
                  className="text-gray-600 flex-none w-[15%] text-right"
                >
                  Balance
                </Heading>
              </div>

              <div className="mt-4">
                {activeTab === "tab1" && (
                  <div className="relative bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-[1135px]">
                    <Text size="textmd" as="p">
                      <div className="pt-1 rounded-[14px] bg-gray-10 px-3.5 shadow-sm">
                        <div className="mr-3.5 mt-6 flex flex-col gap-6 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <PaymentInfo
                                {...d}
                                key={"viewhierarchy" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </Text>

                    <div className="mt-4 mb-2 flex justify-end">
                      <button
                        className="text-white font-bold py-2 px-4 mr-8 mb-2 rounded hover:bg-green-200"
                        style={{ backgroundColor: "#00AB39" }}
                      >
                        Add Funds
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-[1135px]">
                    <Text size="textmd" as="p">
                      <div className="pt-1 rounded-[14px] bg-white px-3.5 shadow-sm">
                        <div className="mr-3.5 mt-6 flex flex-col gap-6 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <PaymentInfo
                                {...d}
                                key={"viewhierarchy" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </Text>
                    <div className="mt-4 mb-2 flex justify-end">
                      <button
                        className="text-white font-bold py-2 px-4 mr-8 mb-2 rounded hover:bg-green-200"
                        style={{ backgroundColor: "#00AB39" }}
                      >
                        Add Funds
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-[1135px]">
                    <Text size="textmd" as="p">
                      <div className="pt-1 rounded-[14px] bg-white px-3.5 shadow-sm">
                        <div className="mr-3.5 mt-6 flex flex-col gap-6 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <PaymentInfo
                                {...d}
                                key={"viewhierarchy" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </Text>
                    <div className="mt-4 mb-2 flex justify-end">
                      <button
                        className="text-white font-bold py-2 px-4 mr-8 mb-2 rounded hover:bg-green-200"
                        style={{ backgroundColor: "#00AB39" }}
                      >
                        Add Funds
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === "tab4" && (
                  <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-[1135px]">
                    <Text size="textmd" as="p">
                      <div className="pt-1 rounded-[14px] bg-white px-3.5 shadow-sm">
                        <div className="mr-3.5 mt-6 flex flex-col gap-6 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <PaymentInfo
                                {...d}
                                key={"viewhierarchy" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </Text>
                    <div className="mt-4 mb-2 flex justify-end">
                      <button
                        className="text-white font-bold py-2 px-4 mr-8 mb-2 rounded hover:bg-green-200"
                        style={{ backgroundColor: "#00AB39" }}
                      >
                        Add Funds
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === "tab5" && (
                  <div className="bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-[1135px]">
                    <Text size="textmd" as="p">
                      <div className="pt-1 rounded-[14px] bg-white px-3.5 shadow-sm">
                        <div className="mr-3.5 mt-6 flex flex-col gap-6 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <PaymentInfo
                                {...d}
                                key={"viewhierarchy" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </Text>
                    <div className="mt-4 mb-2 flex justify-end">
                      <button
                        className="text-white font-bold py-2 px-4 mr-8 mb-2 rounded hover:bg-green-200"
                        style={{ backgroundColor: "#00AB39" }}
                      >
                        Add Funds
                      </button>
                    </div>
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
