"use client";
import React, { useState } from "react";
import Image from "next/image";
import SidebarSeller from "../common/SidebarSeller";
import Link from "next/link";
import Cookies from "js-cookie";
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { SelectBox } from "../common/SelectBox";
import HowItWorks from "./HowItWorks";
import { Input } from "../common/Input";
import { useRouter } from "next/navigation";
import TaxForm from "./taxForm"; 
const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];
export default function SellerSettingsPage(){
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
  const [citizenStatus, setCitizenStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

 
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("fullName");

    router.push("/login");
  };
  const handleSwitch=()=>{
    router.push("/dashboardBuyer")
  }
    
 

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
  const handleLogout2 = () => {
    router.push("/profileDetails");
  };
  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleContinue = () => {
    if (!citizenStatus) {
      alert("Please select your citizen status.");
      return;
    }
    setShowForm(true); 
  };
  return (
    <>
      <div className="w-full bg-gray-10 overflow-x-hidden">
        <div className="flex flex-col items-end bg-gray-50_01">
          <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center bg-gray-10 p-1.5 shadow-6xl">
            <div className="mb-1 flex w-[96%] items-center justify-between">
              <div className="flex flex-col items-start">
                <Image
                  src="/images/logo.png"
                  width={56}
                  height={32}
                  alt="Sidebar Logo"
                  className="ml-6 h-[32px] w-[56px] object-contain"
                />
              </div>
              <div className="flex w-[40%] mr-[100px] flex-col items-start sm:w-full  md:ml-0 sm:ml-0">
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

            <div className="flex w-[18%]  ml-4 mr-[-1rem] items-center justify-center gap-4 sm:w-full">
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
                  <div className="absolute right-0 mt-2 w-48 bg-gray-10 border rounded-lg shadow-lg z-50">
                    <button
                      onClick={handleLogout2}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
                    </button>
                    <button
                      onClick={handleSwitch}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Switch To Buyer
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

          <div className="flex items-start justify-start gap-7 self-stretch mt-[70px]">
            <div className="fixed top-[60px] left-0 h-full bg-white shadow-md z-20">
              <SidebarSeller />
            </div>
            <div className="ml-[300px] mt-[30px] flex flex-1 flex-col gap-7">
              <HowItWorks
                isHowItWorksVisible={isHowItWorksVisible}
                toggleHowItWorks={toggleHowItWorks}
              />
              <div className="relative bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] p-4 mb-[20rem]">
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
                  <li className="mr-6">
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
                  <li>
                    <button
                      className={`${
                        activeTab === "tax-form"
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange("tax-form")}
                    >
                      Tax Form
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

                      <div className="relative">
                        <label className="text-gray-600">Email:</label>
                        <Input
                          type="email"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.email}
                          onChange={(e) => handleInputChange(e, "email")}
                          disabled={!isEditing}
                        />
                        <div className="absolute mt-2 top-1/2 transform -translate-y-1/2 right-4 flex items-center space-x-1 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586 6.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs">Verified</span>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="text-gray-600">Contact Number:</label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.contact}
                          onChange={(e) => handleInputChange(e, "contact")}
                          disabled={!isEditing}
                        />
                        <button className="absolute mt-2 top-1/2 transform -translate-y-1/2 right-2 bg-red-600 text-white px-1.5 py-0.5 rounded text-xs">
                          Unverified
                        </button>
                      </div>

                      <div>
                        <label className="text-gray-600">Date of Birth:</label>
                        <Input
                          type="text"
                          className="border border-gray-300 p-2 rounded-lg w-full"
                          value={editableContent.dob}
                          onChange={(e) => handleInputChange(e, "dob")}
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
                  <>
                    <h2 className="text-lg font-bold mb-4 text-gray-700">
                      Billing Details
                    </h2>

                    <div className="p-6 bg-white rounded-md">
                      <div className="flex flex-wrap gap-6">
                        {" "}
                        {/* Use gap for spacing */}
                        <div className="flex-1 min-w-[250px]">
                          {" "}
                          {/* Ensures minimum width for each column */}
                          <div className="mb-4">
                            <label
                              htmlFor="company"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              Company Name*
                            </label>
                            <Input
                              type="text"
                              id="company"
                              name="company"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="Jhons Smith"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="apartment"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px] "
                            >
                              Apt, Unit, Suite, etc.
                            </label>
                            <Input
                              type="text"
                              id="apartment"
                              name="apartment"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="India"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="state"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              State/ Province/ Region*
                            </label>
                            <Input
                              type="text"
                              id="state"
                              name="state"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="Haryana"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="country"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              Country*
                            </label>
                            <Input
                              type="text"
                              id="country"
                              name="country"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="India"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-[250px]">
                          <div className="mb-4">
                            <label
                              htmlFor="street"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              Street Address*
                            </label>
                            <Input
                              type="text"
                              id="street"
                              name="street"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="Jhons Smith"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="city"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              City/ Town/ Village*
                            </label>
                            <Input
                              type="text"
                              id="city"
                              name="city"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="Jhons Smith"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                            >
                              Postal Code*
                            </label>
                            <Input
                              type="text"
                              id="postal-code"
                              name="postal-code"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px] " // Full width and rectangular
                              value="Jhons Smith"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="vat-number"
                              className="block text-sm font-semibold text-gray-600 text-[17.18px] "
                            >
                              VAT Number
                            </label>
                            <Input
                              type="text"
                              id="vat-number"
                              name="vat-number"
                              className="w-full h-10 border border-gray-300 p-2 rounded-md text-[17.18px]" // Full width and rectangular
                              value="Jhons Smith"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-4 space-x-4">
                        <button
                          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "tax-form" && (
               <div>
               <h2 className="text-xl font-semibold mb-4 text-gray-700">
                 Choose Your Current Status
               </h2>
               <div className="mb-6">
                 <div className="flex items-center mb-4">
                   <input
                     type="radio"
                     id="usPerson"
                     name="citizenStatus"
                     value="usPerson"
                     checked={citizenStatus === "usPerson"}
                     onChange={(e) => setCitizenStatus(e.target.value)}
                     className="mr-2 custom-radio"
                   />
                   <label htmlFor="usPerson" className="text-gray-600 font-semibold">
                     I am a U.S. Person
                   </label>
                 </div>
                 <div className="flex items-center mb-6">
                   <input
                     type="radio"
                     id="nonUsPerson"
                     name="citizenStatus"
                     value="nonUsPerson"
                     checked={citizenStatus === "nonUsPerson"}
                     onChange={(e) => setCitizenStatus(e.target.value)}
                     className="mr-2 custom-radio"
                   />
                   <label htmlFor="nonUsPerson" className="text-gray-600 font-semibold">
                     I am not a U.S. Person
                   </label>
                 </div>
                 <button
                   onClick={handleContinue}
                   className="bg-[#1C65D6] text-white px-6 py-2 rounded-md"
                   disabled={!citizenStatus}
                 >
                   Continue
                 </button>
               </div>
         
               {/* Render the TaxForm component when appropriate */}
               {activeTab === "tax-form" && showForm && (
                 <TaxForm citizenStatus={citizenStatus} />
               )}
             </div>
            
                )}
              

               

                <style jsx>{`
                  .custom-radio {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    background-color: white; /* Keeps the background white */
                    border: 2px solid gray;
                    border-radius: 0; /* Square shape */
                    position: relative;
                    cursor: pointer;
                  }

                  .custom-radio:checked::after {
                    content: "✓"; /* Tick mark */
                    position: absolute;
                    top: -2px;
                    left: 2px;
                    color: #1c65d6; /* Blue tick */
                    font-size: 14px;
                    font-weight: bold;
                  }

                  .custom-radio:checked {
                    background-color: white; /* Ensure background remains white when selected */
                    border: 2px solid gray;
                  }
                `}</style>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}