"use client";

import { Img } from "../common/Img";
import { SelectBox } from "../common/SelectBox";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";

import Link from "next/link";
import Cookies from "js-cookie";
import React, { useState } from "react";

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function DashboardPage() {
  const fullName = Cookies.get("fullName");

  // State to handle dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

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
                {/* Profile Image and Click Handler */}
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

                {/* Dropdown Menu */}
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
<div className="flex items-center justify-center rounded-md bg-gray-50 px-3.5 shadow-bs1">
<div className="flex flex-1 items-start gap-[22px]">
<div className="flex items-center gap-[18px] self-center">
<Text size="text9xl" as="p" className="!text-[41.14px]">
?
</Text>
<div className="h-[66px] w-[2px] bg-white-a700" />
</div>
<Heading size="heading2xl" as="h1" className="mt-[18px]">
How it works?
</Heading>
</div>
<Img src="img_vector_blue_gray_900.svg" width={10} height={3} alt="Vector" className="h-[3px]" />
</div>
<div className="rounded-[20px] bg-white-a700 p-3.5 shadow-sm">
<div className="mt-2 flex flex-col items-center gap-[50px]">
<div className="ml-[34px] mr-7 flex items-center justify-between gap-5 self-stretch md:mx-0 md:flex-col">
<div className="h-[154px] w-[154px] rounded-[76px] bg-blue_gray-100_01" />
<Text size="text6xl" as="p" className="w- [78%] leading-5 md:w-full">
It is a long established fact that a reader will be distracted by the readable content of a page
when looking at its layout. its to Boost Your Business With Collaborator
</Text>
</div>
<div className="mx-4 flex items-center gap-2 self-stretch md:mx-0">
<Button
size="xl"
variant="outline"
shape="round"
color="undefined_undefined"
className="min-w-[188px] font-semibold">
John Smith
</Button>
<Button size="md" variant="outline" color="undefined_undefined" className="w-[38px] rounded-[18px]">
<Img src="img_vector_black_900.svg" width={16} height={16} />
</Button>
</div>
<div className="mx-4 self-stretch md:mx-0">
<div className="flex items-start md:flex-col">
<div className="flex w-[42%] flex-col gap-12 md:w-full">
<div className="flex items-center gap-2.5">
<div className="flex w-[78%] items-start gap-4">
<Heading size="heading2xl" as="h2" className="mt-1 !font-bold">
Location:
</Heading>
<Input
shape="round"
color="undefined_undefined"
name="country"
placeholder={`India`}
className="self-center"
/>
</div>
<Img src="img_menu.svg" width={38} height={38} alt="Menu" className="h-[38px] w-[38px]" />
</div>
<div className="flex items-center gap-2.5">
<div className="flex w-[78%] items-start justify-between gap-5">
<Heading size="heading2xl" as="h3" className="mt-1 !font-bold">
DOB:
</Heading>
<Button
size="xl"
variant="outline"
shape="round"
color="undefined_undefined"
className="min-w-[188px] self-center">
08 July, 2006
</Button>
</div>
<Img src="img_menu.svg" width={38} height={38} alt="Menu" className="h-[38px] w-[38px]" />
</div>
</div>
<div className="flex flex-1 flex-col items-start gap-[60px] self-center px-12 md:self-stretch md:px-5 sm:gap-[30px] ">
<div className="ml-[18px] mr-8 self-stretch md:mx-0">
<div className="flex flex-col gap-12">
<div className="flex items-start justify-center">
<Heading size="heading2xl" as="h4" className="mt-1 !font-bold">
Email:
</Heading>
<div className="flex flex-1 items-center justify-end gap-3 self-center">
<Button
size="xl"
variant="outline"
shape="round"
color="undefined_undefined"
className="min-w-[244px]">
abcd@gmail.com
</Button>
<Button
size="md"
variant="outline"
color="undefined_undefined"
className="w-[38px] rounded-[18px]">
<Img src="img_vector_black_900.svg" width={16} height={16} />
</Button>
</div>
</div>
<div className="flex items-center justify-center sm:flex-col">
<Heading size="heading2xl" as="h5" className="mt-1 self-start font-bold sm:self-auto">
Contact No.
</Heading>
<Input
shape="round"
color="undefined undefined"
name="frame43961"
placeholder={`999 9999 999`}
className="ml-5 sm:ml-0"
/>

<Button
size="md"
variant="outline"
color="undefined undefined"
className="ml-1.5 w- [38px] rounded- [18px] sm:ml-0">
<Img src="img_vector_black_900.svg" width={16} height={16} />
</Button>
</div>
</div>
</div>
<Button size="lg" shape="round" className="min-w-[72px]">
Save
</Button>
</div>
</div>
</div>
<Heading size="text5xl" as="h6" className="self-end !text-blue-700_01 underline">
Explore Services...
</Heading>
</div>
</div>
</div>
</div>
</div>

        </div>
      
  );
}
