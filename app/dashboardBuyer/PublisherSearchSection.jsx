"use client";
import { SelectBox } from "../common/SelectBox";
import { Img } from "../common/Img";
import { Input } from "../common/Input";
import { Heading } from "../common/Heading";
import { CloseSVG } from "../common/Close";
import UserProfile3 from "../common/UserProfile3";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Image from "next/image";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function PublisherSearchSection() {
  const [searchBarValue10, setSearchBarValue10] = React.useState("");
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
            <Heading size="text-[10rem]" as="h1" className="text-adsy_com-black font-semibold text-[24px]">
  Search for Publishers
</Heading>


              <div className="flex justify-between gap-5 self-stretch md:flex-col">
                <TabList className="flex flex-wrap gap-4 ">
                  <Tab className="px-[12px] py-3 text-[14px] font-normal text-adsy_com-black">
                    All
                  </Tab>
                  <Tab className="px-[12px] py-3 text-[14px] font-normal text-adsy_com-black">
                    Pro
                  </Tab>
                  <Tab className="px-[12px] py-3 text-[14px] font-normal text-adsy_com-black">
                    Verified
                  </Tab>
                </TabList>
                <div className="flex flex-1 items-start justify-center gap-5 md:flex-col md:self-stretch md:px-5">
                  <Input
                    color="gray_10"
                    size="xs"
                    name="Search Input"
                    placeholder={`Search`}
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
                    className="w-[84%] gap-3.5 self-center rounded-[14px] border border-solid border-blue_gray-50 !text-gray-400 md:w-full px-3"
                  />

<SelectBox
  size="xs"
  shape="square"
  indicator={
    <Image
      src="/images/CaretDown.png"
      width={10}
      height={8}
      alt="Vector"
      className="h-[8px] w-[10px]"
    />
  }
  name="Filter Dropdown"
  placeholder={`Filter`}
  options={dropDownOptions}
  className="w-[6%] gap-1.5 text-adsy_com-black md:w-full rounded-[14px] border border-gray-300"
/>


                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
