"use client";
import { Text } from "./../common/Text";
import { Img } from "./../common/Img";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { Input } from "../common/Input";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SignUpPage() {
  const words = ["Sales", "Leads", "Revenue", "Engagement"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setDisplayedWord((prev) => {
          if (isDeleting) {
            if (prev.length > 0) return prev.slice(0, -1);
            else {
              setIsDeleting(false);
              setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
              );
              return prev;
            }
          } else {
            if (prev.length < words[currentWordIndex].length)
              return words[currentWordIndex].slice(0, prev.length + 1);
            else {
              setIsDeleting(true);
              return prev;
            }
          }
        });
      },
      isDeleting ? 200 : 300
    ); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Registration successful");
        setError("");
        // Redirect or perform further actions as needed
      } else {
        setError(result.message || "An error occurred");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred while registering");
      setSuccess("");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-10 flex flex-col">
      <div className="mt-8 flex flex-col items-start gap-28 md:gap-[84px] sm:gap-14">
        <Link href="/">
          <Text
            size="text2xl"
            as="p"
            className="sm:text-[28px] md:text-[50px] !font-spacegrotesk2 font-medium !text-adsy_com-black ml-[4rem]"
          >
            LOGO
          </Text>
        </Link>
        <div className="flex items-start self-stretch md:flex-col">
          <div className="mt-[92px] flex-1 self-end md:self-stretch md:px-5 sm:self-auto">
            <div className="flex items-start md:flex-col">
              <Image
                src="/images/Saly-14.png"
                width={362}
                height={568}
                alt="Saly Image"
                className="mt-[60px] h-[568px] w-[46%] self-end object-contain md:w-full md:self-auto"
              />
              <div className="flex flex-1 flex-col items-start px-1.5 md:self-stretch">
                <Heading
                  size="heading7xl"
                  as="h2"
                  className="!text-indigo-a400 !text-[48px] font-bold sm:text-[42px]"
                >
                  Sign Up to
                </Heading>
                <Heading
                  size="text9xl"
                  as="h3"
                  className="!text-gray-10 mt-16 !text-[34.28px] sm:!text-[30px]"
                >
                  <span className="text-adsy_com-black">Generate&nbsp;</span>
                </Heading>
                <div className="relative h-[72px] self-stretch">
                  <div className="absolute bottom-0 right-[25%] top-0 my-auto h-[72px] w-[50%] bg-indigo-a400" />
                  <div className="absolute left-0 right-0 top-[3.47px] m-auto flex flex-1 flex-col items-start">
                    <Heading
                      size="text13xl"
                      as="h4"
                      className="!text-[55.16px] !text-gray-10 sm:!text-[41px]"
                    >
                      <span className="text-adsy_com-black">More</span>
                      <span className="text-gray-10 opacity-30 -z-10 transform translate-x-6">
                        &nbsp;
                      </span>
                      <span className="font-bold underline">
                        {displayedWord}
                      </span>
                    </Heading>
                  </div>
                </div>
                <Text
                  as="p"
                  className="ml-1.5 mt-[68px] !font-poppins !text-adsy_com-black md:ml-0"
                >
                  If you do not have an account register
                </Text>
                <Link href="/login" target="_blank">
                  <Text
                    as="p"
                    className="ml-1.5 mt-1.5 !font-poppins !text-adsy_com-black md:ml-0"
                  >
                    <span className="text-adsy_com-black">You can &nbsp;</span>
                    <span className="font-semibold text-indigo-a400">
                      Login Here !
                    </span>
                  </Text>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-[44%] flex-col items-center px-14 md:w-full md:px-5">
            <Text
              size="text7xl"
              as="p"
              className="ml-[4rem] self-start !font-poppins !font-medium !text-adsy_com-black text-[22px] sm:text-[28px]"
            >
              Sign Up
            </Text>
            <form className="mt-6 flex w-[82%] flex-col items-start md:w-full" onSubmit={handleSubmit}>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: '1rem' }}
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                shape="round"
                type="text"
                name="fullName"
                placeholder="Name"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: '1rem' }}
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                shape="round"
                type="text"
                name="phoneNumber"
                placeholder="Contact Number"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: '1rem' }}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Input
                color="blue 50"
                shape="round"
                type="password"
                name="password"
                placeholder="Password"
                suffix={
                  <Image
                    src="/images/invisible.png"
                    width={16}
                    height={16}
                    alt="Invisible Icon"
                    className="h-[16px] w-[16px] mr-[1rem]"
                  />
                }
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem] text-center"
                style={{ paddingLeft: '1rem' }}
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                color="blue 50"
                shape="round"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                suffix={
                  <Image
                    src="/images/invisible.png"
                    width={16}
                    height={16}
                    alt="Invisible Icon"
                    className="h-[16px] w-[16px] mr-[1rem]"
                  />
                }
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem] text-center"
                style={{ paddingLeft: '1rem' }}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {error && (
                <p className="mt-2 text-red-500">{error}</p>
              )}
              {success && (
                <p className="mt-2 text-green-500">{success}</p>
              )}
              <Button
                shape="round"
                type="submit"
                color="blue"
                className="mt-4 w-[60%] bg-[#3861FB] h-[60px] font-semibold text-white"
              >
                Register
              </Button>
              <Link href="#" className="ml-[120px] mt-[2rem] md:ml-0 ">
                <Text
                  as="p"
                  className="!font-poppins !font-medium !text-gray-400"
                >
                  or continue with
                </Text>
              </Link>
            </form>
            <div className="mt-6 flex flex-row items-center justify-center w-full ml-[-15rem]">
            <Image
                src="/images/Facebook2.png"
                width={40}
                height={40}
                alt="Apple Icon"
                className="ml-[1rem] h-[40px] w-[40px] object-cover"
              />
              <Image
                src="/images/apple.png"
                width={40}
                height={40}
                alt="Apple Icon"
                className="ml-[1rem] h-[40px] w-[40px] object-cover"
              />
              <Image
                src="/images/google.png"
                width={40}
                height={40}
                alt="Google Icon"
                className="ml-[1rem] h-[40px] w-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
