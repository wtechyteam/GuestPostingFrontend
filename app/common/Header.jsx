import { Button } from "./Button";
import { Text } from "./Text";
import { SelectBox } from "./SelectBox";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const dropDownOptions = [
  { label: "Option1", value: "Option1" },
  { label: "Option2", value: "Option2" },
  { label: "Option3", value: "Option3" },
];

export default function Header({ ...props }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-6 sm:py-5 z-[7] relative bg-gray-10 shadow-xs`}
    >
      <div className="container-xs flex justify-between gap-5 px-12 md:px-5">
        {/* Logo */}
        <Link href="/">
          <Text
            size="text2xl"
            as="p"
            className="sm:text-[28px] md:text-[32px] !font-spacegrotesk2 font-medium !text-adsy_com-black"
          >
            LOGO
          </Text>
        </Link>

        {/* Burger Menu Icon for Small Screens */}
        <div className="hidden md:block flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <Image
              src="/images/hamburger.png"
              width={24}
              height={24}
              alt="Menu"
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>

        {/* Full Menu - Hidden on Small Screens */}
        <div
          className={`w-[84%] flex justify-between gap-5 md:w-full md:flex-col md:items-center md:${
            isMenuOpen ? "block" : "hidden"
          } md:bg-gray-200 md:rounded-lg transition-all`}
        >
          <div className="relative rounded-[24px] w-[60%] flex justify-center bg-gray-50_02 p-2.5 md:w-full md:bg-transparent">
            <div className="flex w-full md:flex-col md:items-center">
              <ul className="gap-[72px] flex flex-wrap md:gap-5 md:flex-col md:items-center">
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-[16px] !font-spacegrotesk2 font-medium !text-black-70_ bg-transparent border-none cursor-pointer flex"
                  >
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] !font-spacegrotesk2 font-medium !text-black-70_"
                    >
                      How It Works
                    </Text>
                    <Image
                      src="/images/CaretDown.png"
                      width={16}
                      height={14}
                      alt="Arrow Down"
                      className="h-[14px] w-[16px] mt-[0.35rem]"
                    />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-gray-50_02 border border-gray-300 shadow-lg rounded-lg">
                      <li>
                        <Link href="/for-buyer" legacyBehavior>
                          <a className="block px-4 py-2 text-[16px] !font-spacegrotesk2 font-medium !text-black-70_">
                            For Buyer
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/for-seller" legacyBehavior>
                          <a className="block px-4 py-2 text-[16px] !font-spacegrotesk2 font-medium !text-black-70_">
                            For Seller
                          </a>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] !font-spacegrotesk2  font-medium !text-black-70_"
                    >
                      FAQs
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] !font-spacegrotesk2  font-medium !text-black-70_"
                    >
                      Blogs
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] !font-spacegrotesk2  font-medium !text-black-70_"
                    >
                      Contact Us
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[28%] flex justify-center md:w-full md:mt-3 md:flex-col md:items-center">
            <SelectBox
              shape="round"
              indicator={
                <Image
                  src="/images/CaretDown.png"
                  width={16}
                  height={14}
                  alt="Arrow Down"
                  className="h-[14px] w-[16px]"
                />
              }
              name="Language DropDown"
              placeholder={`EN`}
              options={dropDownOptions}
              className="w-[26%] gap-1.5 text-black"
            />
            <Link href="/login" legacyBehavior>
              <a className="block">
                <Button
                  size="md"
                  className="min-w-[92px] ml-3.5 font-medium bg-blue-500 text-white transition-colors duration-300 md:mb-3 md:mt-3 md:min-w-[80px] md:px-2 md:py-1" // Smaller size for small screens
                >
                  Login
                </Button>
              </a>
            </Link>

            <Link href="/signup" legacyBehavior>
              <a className="block">
                <Button
                  size="md"
                  className="min-w-[110px] ml-4 font-medium bg-principal_blue text-white transition-colors duration-300 md:min-w-[90px] md:px-2 md:py-1" // Smaller size for small screens
                >
                  Sign Up
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
