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
import { Input } from "../common/Input";
import { useRouter } from 'next/navigation'; 

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function SettingsPage() {
  const fullName = Cookies.get("fullName");

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
  const router = useRouter();  // Initialize the router

  const handleLogout = () => {
    // Add your logout logic here, e.g., clear cookies or call an API
    Cookies.remove('fullName');
    
    // Redirect to the login page after logout
    router.push('/login');
  };

  // State to manage active tab
  const [activeTab, setActiveTab] = useState("account-settings");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-100% bg-gray-10 overflow-x-hidden">
      <div className="flex flex-col items-end bg-gray-50_01 ">
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
                    <Link href="/profile-settings" legacyBehavior>
                      <a className="block px-4 py-2 !text-gray-900 hover:bg-gray-100">
                        Profile Settings
                      </a>
                    </Link>
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
          <Sidebar1 />

          <div className="mt-[26px] flex flex-1 flex-col gap-[22px]">
            <HowItWorks
              isHowItWorksVisible={isHowItWorksVisible}
              toggleHowItWorks={toggleHowItWorks}
            />
            <div className="rounded-[20px] bg-white p-6 shadow-lg flex flex-col  mb-6 min-h-[700px] w-[1580px]">
              <h1 className="text-3xl font-bold mb-4 text-gray-700">
                Profile Settings
              </h1>
              <div className="border-b border-gray-200 mb-6">
                <ul className="flex">
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "account-settings"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("account-settings")}
                    >
                      Account settings
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "contact-info"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("contact-info")}
                    >
                      Contact info
                    </button>
                  </li>
                  <li className="mr-6">
                    <button
                      className={`${
                        activeTab === "notification-settings"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("notification-settings")}
                    >
                      Notification settings
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${
                        activeTab === "billing-details"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("billing-details")}
                    >
                      Billing details
                    </button>
                  </li>
                </ul>
              </div>

              {/* Content based on active tab */}
              <div className="mb-8">
                {activeTab === "account-settings" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                      Link Accounts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          Facebook account
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Link Account
                        </button>
                      </div>
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          Google account
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Link Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "contact-info" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-600">Name:</label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.name}
                          onChange={(e) => handleInputChange(e, "name")}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="text-gray-600">Location:</label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.location}
                          onChange={(e) => handleInputChange(e, "location")}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="text-gray-600">Email:</label>
                        <Input
                          type="email"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.email}
                          onChange={(e) => handleInputChange(e, "email")}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="text-gray-600">
                          Date of Birth:
                        </label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.dob}
                          onChange={(e) => handleInputChange(e, "dob")}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="text-gray-600">
                          Contact Number:
                        </label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.contact}
                          onChange={(e) => handleInputChange(e, "contact")}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "notification-settings" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                      Notifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          Email Notifications
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Enable
                        </button>
                      </div>
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          SMS Notifications
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Enable
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "billing-details" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                      Billing Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          Credit Card
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Update
                        </button>
                      </div>
                      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <span className="text-gray-600 font-semibold">
                          PayPal
                        </span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}