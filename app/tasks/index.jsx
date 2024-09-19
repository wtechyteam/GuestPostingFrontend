"use client";
import { CloseSVG } from "../common/Close";
import { Input } from "../common/Input";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import AcceptCard from "../common/AcceptCard";
import ApprovalPending from "../common/ApprovalPending";
import CompletedCard from "../common/CompletedCard"
import ImprovementCard from "../common/ImprovementCard";
import RejectedCard from "../common/RejectedCard";
import ArchievedCard from "../common/ArchievedCard";
import InProgressCard from "../common/InProgressCard"
import TaskCard from "../common/TaskCard";
import Image from "next/image";
import MoreTasks from "./MoreTasks";
import Sidebar1 from "../common/Sidebar1";
import PublishersAcceptanceButton from "../common/PublishersAcceptanceButton"
import HowItWorks from "./HowItWorks";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function NotificationPage() {
  const fullName = Cookies.get("fullName");
  const [searchBarValue10, setSearchBarValue10] = React.useState("");
  const [publisherValue, setPublisherValue] = React.useState("");

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
            <MoreTasks />
            <h1 className="text-3xl font-bold text-gray-700 !text-left">
              Tasks
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
                      All (except deleted)
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
                      Draft
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab32"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab32")}
                    >
                      Publisher Acceptance
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab22"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab22")}
                    >
                      In Progress
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
                      Your Approval
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
                      Improvement
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
                      Completed
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab6"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab6")}
                    >
                      Rejected
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "tab7"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tab7")}
                    >
                      Archived
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
              {activeTab === "tab1" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>
                    <CompletedCard />
                    <TaskCard />
                    <InProgressCard />
                  
                    <ApprovalPending />
                    <AcceptCard/>
                 
                    <RejectedCard />
                    <ImprovementCard />
                    <ArchievedCard />
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                  </div>
                )}
                 {activeTab === "tab32" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <PublishersAcceptanceButton />
                    <PublishersAcceptanceButton />
                    <PublishersAcceptanceButton />
                    <PublishersAcceptanceButton />
                    <PublishersAcceptanceButton />
                  </div>
                )}
                 {activeTab === "tab22" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <InProgressCard />
                    <InProgressCard />
                    <InProgressCard />
                    <InProgressCard />
                    <InProgressCard />
                  </div>
                )}
                 {activeTab === "tab3" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <AcceptCard />
                    <ApprovalPending />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                  </div>
                )}
                 {activeTab === "tab4" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <ImprovementCard />
                    <ImprovementCard />
                    <ImprovementCard />
                    <ImprovementCard />
                    <ImprovementCard />
                  </div>
                )}
                 {activeTab === "tab5" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <CompletedCard />
                    <CompletedCard />
                    <CompletedCard />
                    <CompletedCard />
                    <CompletedCard />
                  </div>
                )}
                 {activeTab === "tab6" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <RejectedCard />
                    <RejectedCard />
                    <RejectedCard />
                    <RejectedCard />
                    <RejectedCard />
                  </div>
                )}
                 {activeTab === "tab7" && (
                  <div>
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
                          placeholder={`Created Date`}
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
                          placeholder={`Publisher's URL`}
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
                          placeholder={`Promoted URL's`}
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
                          placeholder={`Anchor Text`}
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
                        <Select
                          value={options.find(
                            (option) => option.value === searchBarValue10
                          )}
                          onChange={(selectedOption) =>
                            setSearchBarValue10(selectedOption.value)
                          }
                          options={options}
                          placeholder="Service Type"
                          styles={customStyles}
                          classNamePrefix="react-select"
                          className="w-[84%] mt-[-1rem] rounded-[14px] !text-gray-400 md:w-full px-3 py-5"
                        />
                      </div>
                    </div>

                    <ArchievedCard />
                    <ArchievedCard />
                    <ArchievedCard />
                    <ArchievedCard />
                    <ArchievedCard />
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
const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "40px",
    borderRadius: "18px",
    padding: "0px 10px", // Adjust padding if needed
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "50px", // Ensures the internal container has the same height
    padding: "15px 10px", // Adjust padding inside
    display: "flex",
    alignItems: "center", // Align text vertically
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px", // Remove margin to align the input properly
  }),
};
