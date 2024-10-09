import { Button } from "./Button";
import { Text } from "./Text";
import { SelectBox } from "./SelectBox";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

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

  const menuItems = [
    { text: "How It Works", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Blogs", href: "#" },
    { text: "Contact Us", href: "/contact-us" },
  ];

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
        <div className="hidden md:block sm:block flex items-center">
          <button
            onClick={toggleMenu}
            className="relative text-black focus:outline-none"
          >
            <Image
              src={isMenuOpen ? "/images/close.png" : "/images/hamburger.png"}
              width={24}
              height={24}
              alt={isMenuOpen ? "Close Menu" : "Menu"}
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>

        {/* Full Menu - Hidden on Small Screens */}
        <div
          className={`flex md:hidden w-[84%] justify-between gap-5 md:w-full md:flex-col md:items-center`}
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
                      className="text-[16px] !font-spacegrotesk2 font-medium !text-black-70_"
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
                      className="text-[16px] !font-spacegrotesk2 font-medium !text-black-70_"
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
                      className="text-[16px] !font-spacegrotesk2 font-medium !text-black-70_"
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
              className="w-[26%] gap-1.5 text-black block md:hidden"
            />
            <Link href="/login" legacyBehavior>
              <a className="block">
                <Button
                  size="md"
                  className="min-w-[92px] ml-3.5 font-medium bg-blue-500 text-white transition-colors duration-300 md:mb-3 md:mt-3 md:min-w-[80px] md:px-2 md:py-1"
                >
                  Login
                </Button>
              </a>
            </Link>

            <Link href="/signup" legacyBehavior>
              <a className="block">
                <Button
                  size="md"
                  className="min-w-[110px] ml-4 font-medium bg-principal_blue text-white transition-colors duration-300 md:min-w-[90px] md:px-2 md:py-1"
                >
                  Sign Up
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Collapsed Menu for Small Screens */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
  <div className="relative p-4 w-64">
    {/* Close Icon */}
    <button
      onClick={toggleMenu}
      className="absolute top-4 right-4 text-black focus:outline-none"
    >
      <Image
        src="/images/close.png"
        width={24}
        height={24}
        alt="Close Menu"
        className="h-[20px] w-[20px]"
      />
    </button>
    
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} href={item.href} onClick={toggleMenu}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Link href="/login" legacyBehavior>
      <a onClick={toggleMenu}>
        <Button
          size="md"
          className="min-w-[92px] w-full bg-blue-500 text-white transition-colors duration-300 mt-2"
        >
          Login
        </Button>
      </a>
    </Link>
    <Link href="/signup" legacyBehavior>
      <a onClick={toggleMenu}>
        <Button
          size="md"
          className="min-w-[110px] w-full bg-principal_blue text-white transition-colors duration-300 mt-2"
        >
          Sign Up
        </Button>
      </a>
    </Link>
  </div>
</Drawer>

    </header>
  );
}
