"use client";
import { SelectBox } from "../common/SelectBox";
import { Img } from "../common/Img";
import { Input } from "../common/Input";
import { Heading } from "../common/Heading";
import { CloseSVG } from "../common/Close";
import UserProfile3 from "../common/UserProfile3";
import React, { useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Image from "next/image";
import { Button } from "app/common/Button";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function PublisherSearchSection() {
  const [searchBarValue10, setSearchBarValue10] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(50);
  const [ahref, setAhref] = useState(50);
  const [mozDR, setMozDR] = useState(50);
  const [semrushDA, setSemrushDA] = useState(50);
  const [spamScore, setSpamScore] = useState(50);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* publisher search section */}
      <div>
        <Tabs
          className="flex flex-col gap-4"
          selectedTabClassName="!text-adsy_com-black bg-gray-10 rounded-[14px]"
          selectedTabPanelClassName="ml-1 md:ml-0 !relative tab-panel--selected"
        >
          <div className="mr-4 md:mr-0">
            <div className="flex flex-col items-start gap-[18px]">
              <Heading
                size="text-[10rem]"
                as="h1"
                className="text-adsy_com-black font-semibold text-[24px]"
              >
                Search for Publishers
              </Heading>

              <div className="flex justify-between gap-5 self-stretch md:flex-col">
                <TabList className="flex flex-wrap gap-4 ">
                  <Tab className="px-[12px] py-4 text-[14px] font-normal text-adsy_com-black">
                    All
                  </Tab>
                  <Tab className="px-[12px] py-4 text-[14px] font-normal text-adsy_com-black">
                    Pro
                  </Tab>
                  <Tab className="px-[12px] py-4 text-[14px] font-normal text-adsy_com-black">
                    Verified
                  </Tab>
                </TabList>
                <div className="flex flex-1 items-start justify-center gap-5 md:flex-col md:self-stretch md:px-5">
                  <Input
                    color="gray_10"
                    size="xs"
                    name="Search Input"
                    placeholder="Search"
                    value={searchBarValue10}
                    onChange={(e) => setSearchBarValue10(e.target.value)}
                    prefix={
                      <div className="flex h-[12px] w-[10px] items-center justify-center">
                        <Image
                          src="/images/Group 25811.png"
                          width={15}
                          height={13}
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
                    className="w-[84%] gap-3.5 self-center rounded-[14px] border border-solid border-blue_gray-50 !text-gray-400 md:w-full px-3"
                  />

                  <Button
                    size="xs"
                    shape="square"
                    name="Filter Dropdown"
                    placeholder="Filter"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #d1d5db",
                      height: "46px",
                      width: "100px",
                      borderRadius: "24px",
                      color: "#333",
                      fontSize: "15px",
                    }}
                    className="gap-1.5 flex items-center justify-center"
                    onClick={openModal}
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Heading
            size="text-[10rem]"
            as="h1"
            className="text-gray-600 font-semibold text-[18px]"
          >
            Results: {3 * 4} sites
          </Heading>
          {[...Array(3)].map((_, index) => (
            <TabPanel
              key={`tab-panel${index} `}
              className="absolute ml-1 items-center md:ml-0"
            >
              <div className="w-full">
                <div className="flex flex-col gap-1">
                  <UserProfile3 />
                  {/* <UserProfile3 />
                  <UserProfile3 /> */}
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-[90%] max-w-4xl bg-gray-10 p-8 rounded-lg max-h-[50vh] overflow-y-auto scrollbar-thin">
            <div className="relative">
              <button
                className="absolute top-3 right-3 text-gray-500"
                onClick={closeModal}
              >
                &#x2715;
              </button>
              <Heading
                size="lg"
                as="h2"
                className="font-semibold text-adsy_com-black text-[30px]"
              >
                Filters
              </Heading>
              <hr className="border-t-2 border-gray-300 my-4" />
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-normal text-adsy_com-black mb-2 text-[20px]">
                Most Popular Filters
              </h2>

              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-5 mt-1 text-gray-500">
                    Price Range
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={value}
                      className="w-full"
                      onChange={(e) => setValue(Number(e.target.value))}
                    />
                    <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                      <span className="text-gray-700">$50</span>
                    </div>
                    <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                      <span className="text-gray-700">$5000</span>
                    </div>
                    <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                      <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                        ${value.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block mb-5 mt-1 text-gray-500">
                    Ahrefs DR from
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={ahref}
                      className="w-full"
                      onChange={(e) => setAhref(Number(e.target.value))}
                    />
                    <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                      <span className="text-gray-700">$50</span>
                    </div>
                    <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                      <span className="text-gray-700">$5000</span>
                    </div>
                    <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                      <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                        ${ahref.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Categories
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 text-adsy_com-black mt-6">
              <div className="flex-1">
                <label className="block mb-2 mt-1 text-gray-500">Country</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Not Selected</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-2 mt-1 text-gray-500">
                  Language
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Not Selected</option>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block mb-2 mt-1 text-gray-500">
                  Approved
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Not Selected</option>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-normal text-adsy_com-black mt-6 mb-4 text-[20px]">
                SEO Filters
              </h2>

              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-5 mt-1 text-gray-500">
                    MOZ DR From
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={mozDR}
                      className="w-full"
                      onChange={(e) => setMozDR(Number(e.target.value))}
                    />
                    <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                      <span className="text-gray-700">$50</span>
                    </div>
                    <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                      <span className="text-gray-700">$5000</span>
                    </div>
                    <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                      <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                        ${mozDR.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block mb-5 mt-1 text-gray-500">
                    Semrush DA from
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={semrushDA}
                      className="w-full"
                      onChange={(e) => setSemrushDA(Number(e.target.value))}
                    />
                    <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                      <span className="text-gray-700">$50</span>
                    </div>
                    <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                      <span className="text-gray-700">$5000</span>
                    </div>
                    <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                      <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                        ${semrushDA.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block mb-5 mt-1 text-gray-500">
                    Spam Score from
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      value={spamScore}
                      className="w-full"
                      onChange={(e) => setSpamScore(Number(e.target.value))}
                    />
                    <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                      <span className="text-gray-700">$50</span>
                    </div>
                    <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                      <span className="text-gray-700">$5000</span>
                    </div>
                    <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                      <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                        ${spamScore.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-normal text-adsy_com-black mt-6 mb-4 text-[20px]">
                Product Filters
              </h2>

              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Service Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Follow/Notfolow links
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Surfacing in Google News
                  </label>
                  <select className="w-full text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <label className="block mb-2 mt-1 text-gray-500">
                  Marked Sponsored By
                </label>
                <select className="w-64 text-adsy_com-black border border-gray-300 rounded-md p-2">
                  <option>Not Selected</option>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-normal text-adsy_com-black mt-6 mb-4 text-[20px]">
                Publisher Filters
              </h2>

              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Avg Lifetime of Links
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Example of Work
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Initial Domain and Price
                  </label>
                  <select className="w-full text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Completion Rate
                  </label>
                  <select className="w-full text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">TAT</label>
                  <select className="w-full text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Security Deposit
                  </label>
                  <select className="w-full text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-6 text-adsy_com-black">
                <div className="flex-1">
                  <label className="block mb-2 mt-1 text-gray-500">
                    Rating
                  </label>
                  <select className="w-64 text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="flex-1 ">
                  <label className="block ml-[-140px] mb-2 mt-1 text-gray-500">
                    Confirmation Status
                  </label>
                  <select className="w-64 ml-[-140px] text-adsy_com-black border border-gray-300 rounded-md p-2">
                    <option>Not Selected</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="rounded-full flex justify-center space-x-4 mt-6">
              <Button
                className="min-w-[134px] rounded-xl font-bold text-white bg-indigo-a400 text-sm h-10 mb-[0.3rem]"
                color="indigo_a400"
                size="md"
                onClick={closeModal}
              >
                Apply Filters
              </Button>
              <Button
                className="min-w-[134px] rounded-xl font-bold text-white bg-indigo-a400 text-sm h-10 mb-[0.3rem]"
                color="indigo_a400"
                size="md"
                onClick={closeModal}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
