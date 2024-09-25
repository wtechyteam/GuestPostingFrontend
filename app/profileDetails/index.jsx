"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar1 from "../common/Sidebar1";
import Link from "next/link";
import Cookies from "js-cookie";
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { SelectBox } from "../common/SelectBox";
import HowItWorks from "./HowItWorks";
import { Input } from "./../common/Input";
import { useRouter } from "next/navigation";

import axios from "axios"; 

const dropDownOptions = [
  { label: "English", value: "English" },
  { label: "English", value: "option2" },
  { label: "English", value: "option3" },
];

export default function ProfileDetailsPage() {
  const fullName = Cookies.get("fullName");

  const token = Cookies.get("authToken");
  const email = Cookies.get("email");
  const userId = Cookies.get("userId");
  console.log(userId);
  const router = useRouter();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [editableContent, setEditableContent] = useState({
    name: "",
    location: "",
    email: "",
    dob: "",
    contact: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("User Details Response:", response);

        if (response.status === 200) {
          const userData = response.data;
          setEditableContent({
            name: userData.fullName || "Not Specified",
            email: userData.email || "Not Specified",
            location: userData.location || "Not Specified",
            dob: formatDate(userData.DOB) || "Not Specified",
            contact: userData.contact || "Not Specified",
          });
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId, token]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };

  const handleLogout = () => {
    Cookies.remove("fullName");
    router.push("/login");
  };

  const handleLogout2 = () => {
    router.push("/profileDetails");
  };

  const handleInputChange = (e, field) => {
    setEditableContent({ ...editableContent, [field]: e.target.value });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const { name, email, location, dob, contact } = editableContent;

    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${userId}`,
        {
          fullName: name,
          email: email,
          location: location,
          DOB: dob,
          contact: contact,
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again later.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full h-100% bg-gray-10 overflow-x-hidden">
      <div className="flex flex-col items-end bg-gray-50_01 ">
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

        <div className="flex items-start justify-start gap-7 self-stretch">
          {/* Fixed Sidebar */}
          <div className="fixed top-100 mt-[50px] left-0 h-full bg-white shadow-md z-20">
            <Sidebar1 />
          </div>

          <div className="ml-[300px] mt-[100px] flex flex-1 flex-col gap-7">
            <HowItWorks
              isHowItWorksVisible={isHowItWorksVisible}
              toggleHowItWorks={toggleHowItWorks}
            />

            <div className="rounded-[20px] bg-gray-10 p-6 shadow-lg flex flex-col  mb-6 min-h-[700px] w-[1580px]">
              <h1 className="text-3xl font-bold mb-4 text-gray-700 !text-left">
                Profile Details
              </h1>

              <div className="relative flex items-start w-full mb-4">
                <Image
                  src="/images/Profile2.png"
                  width={154}
                  height={154}
                  alt="Profile Image"
                  className="rounded-full mr-8"
                />

                <div className="max-w-lg mt-10 ml-8 sm:mt-0">
                  <Text
                    size="text6xl"
                    as="p"
                    className="!text-gray-900 leading-normal"
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. It is to Boost Your Business With Collaborator.
                  </Text>
                </div>

                {!isEditing && (
                  <button
                    className="absolute bottom-20 right-4 rounded-lg bg-blue-500 text-white py-2 px-6 sm:right-0 sm:bottom-0"
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold mr-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={editableContent.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className={`p-2 border border-gray-600 ${
                      isEditing ? "!bg-gray-300" : "!bg-white"
                    } !rounded-lg !text-gray-900 placeholder:text-adsy_com-black h-[30px] w-[150px] text-center ml-11 sm:ml-0`}
                    disabled={!isEditing}
                  />

                  {isEditing && (
                    <Image
                      src="/images/Group 25818.png"
                      width={24}
                      height={24}
                      alt="Name Icon"
                      className="ml-2"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold mr-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={editableContent.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className={`p-2 border !text-adsy_com-black ${
                      isEditing ? "!bg-gray-300 " : "!bg-white"
                    } !rounded-lg h-[30px] w-[200px] text-center !text-gray-900 placeholder:text-adsy_com-black sm:ml-0 ml-14`}
                    disabled={!isEditing}
                  />

                  {isEditing && (
                    <Image
                      src="/images/Group 25818.png"
                      width={24}
                      height={24}
                      alt="Email Icon"
                      className="ml-2"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold mr-2">
                    Location:
                  </label>
                  <input
                    type="text"
                    value={editableContent.location}
                    onChange={(e) => handleInputChange(e, "location")}
                    className={`p-2 border ${
                      isEditing ? "!bg-gray-300" : "!bg-white"
                    } !rounded-lg  !text-gray-900 placeholder:text-adsy_com-black h-[30px] w-[150px] text-center ml-[-1] sm:ml-0 ml-5`}
                    disabled={!isEditing}
                  />
                  {isEditing && (
                    <Image
                      src="/images/Group 25818.png"
                      width={24}
                      height={24}
                      alt="Location Icon"
                      className="ml-2"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold mr-2">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    value={editableContent.dob}
                    onChange={(e) => handleInputChange(e, "dob")}
                    className={`p-2 border ${
                      isEditing ? "!bg-gray-300" : "!bg-white"
                    } !rounded-lg !text-gray-900 placeholder:text-adsy_com-black h-[30px] w-[150px] text-center ml-5`}
                    disabled={!isEditing}
                  />
                  {isEditing && (
                    <Image
                      src="/images/Group 25818.png"
                      width={24}
                      height={24}
                      alt="DOB Icon"
                      className="ml-2"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold mr-2">
                    Contact:
                  </label>
                  <input
                    type="text"
                    value={editableContent.contact}
                    onChange={(e) => handleInputChange(e, "contact")}
                    className={`p-2 border ${
                      isEditing ? "!bg-gray-300" : "!bg-white"
                    } !rounded-lg  !text-gray-900 placeholder:text-adsy_com-black h-[30px] w-[150px] text-center sm:ml-0 ml-6`}
                    disabled={!isEditing}
                  />
                  {isEditing && (
                    <Image
                      src="/images/Group 25818.png"
                      width={24}
                      height={24}
                      alt="Contact Icon"
                      className="ml-2"
                    />
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="flex mt-4 gap-4">
                  <button
                    className="rounded-lg bg-blue-500 text-white py-2 px-6"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="rounded-lg bg-gray-300 text-gray-700 py-2 px-6"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
