"use client";
import { Text } from "./../common/Text";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { Input } from "../common/Input";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const words = ["Sales", "Leads", "Revenue", "Engagement"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
  const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = hostedURL || localbaseURL;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

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
    );

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error messages
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${hostedURL}/signup`, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        contact: formData.phoneNumber,
      });

      const { token, user } = response.data;

      // Set the token and fullName as cookies
      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("fullName", user.fullName, { expires: 7 });
      setSuccess("Registration successful");
      setError("");

      router.push("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const backendErrors = error.response.data.errors;
        const errorMessages = backendErrors.map(err => err.msg).join(", ");
        setError(errorMessages);
      } else {
        setError("An unexpected error occurred");
      }
      setSuccess("");
    }
  };
  return (
    <div className="w-full h-auto bg-gray-10  flex flex-col overflow-hidden">
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
                width={262} 
                height={468} 
                alt="Saly Image"
                className="mt-[20px] sm:ml-[-2rem] sm:mt-[-10rem] h-auto w-[36%] md:w-[80%] self-end object-contain block sm:mx-[2rem] lg:mx-0" 
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
                <Link href="/login">
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
              className="!font-poppins !font-medium !text-adsy_com-black text-[22px] sm:mr-0 md:mr-0 sm:text-[28px] text-center sm:text-center md:text-center mr-[24rem]  "
            >
              Sign Up
            </Text>
            <form
              className="mt-6 flex w-[82%] flex-col items-start md:w-full"
              onSubmit={handleSubmit}
            >
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: "1rem" }}
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                shape="round"
                type="text"
                name="fullName"
                placeholder="Name"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: "1rem" }}
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                shape="round"
                type="text"
                name="phoneNumber"
                placeholder="Contact Number"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins flex items-center justify-center text-center mt-[1rem]"
                style={{ paddingLeft: "1rem" }}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Input
                color="blue 50"
                shape="round"
                type={isPasswordVisible ? "text" : "password"} 
                name="password"
                placeholder="Password"
                suffix={
                  <Image
                    src={
                      isPasswordVisible
                        ? "/images/Frame 43967.png"
                        : "/images/invisible.png"
                    } 
                    width={16}
                    height={16}
                    alt="Visibility Icon"
                    className="h-[16px] w-[16px] mr-[1rem] cursor-pointer"
                    onClick={togglePasswordVisibility} 
                  />
                }
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem] text-center"
                style={{ paddingLeft: "1rem" }}
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                color="blue 50"
                shape="round"
                type={isConfirmPasswordVisible ? "text" : "password"} 
                name="confirmPassword"
                placeholder="Confirm Password"
                suffix={
                  <Image
                    src={
                      isConfirmPasswordVisible
                        ? "/images/Frame 43967.png"
                        : "/images/invisible.png"
                    } 
                    width={16}
                    height={16}
                    alt="Visibility Icon"
                    className="h-[16px] w-[16px] mr-[1rem] cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                }
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem] text-center"
                style={{ paddingLeft: "1rem" }}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {error && <p className="mt-2 text-red-500">{error}</p>}
              {success && <p className="mt-2 text-green-500">{success}</p>}
              <Button
                shape="round"
                type="submit"
                color="blue"
                className="mt-4 w-[60%] bg-[#3861FB] h-[60px] font-semibold text-white"
              >
                Register
              </Button>
              <Link href="#" className="mt-[2rem]">
                <Text
                  as="p"
                  className="!font-poppins !font-medium !text-gray-400 flex md:items-center md:justify-center md:ml-[4rem] sm:items-center sm:justify-center sm:ml-0 text-center  ml-[5rem]"
                >
                  or continue with
                </Text>
              </Link>
            </form>
            <div className="mt-6 flex flex-row sm:items-center sm:justify-center w-full gap-[3rem] sm:gap-[2rem] sm:w-[100%] ml-[3rem] sm:ml-0 md:ml-[3rem]">
              <Image
                src="/images/Facebook2.png"
                width={40}
                height={40}
                alt="Facebook Icon"
                className="h-[40px] w-[40px] object-cover"
              />
              <Image
                src="/images/apple.png"
                width={40}
                height={40}
                alt="Apple Icon"
                className="h-[40px] w-[40px] object-cover"
              />
              <Image
                src="/images/google.png"
                width={40}
                height={40}
                alt="Google Icon"
                className="h-[40px] w-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
