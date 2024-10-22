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

export default function LoginOnePage() {
  const words = ["Sales", "Leads", "Revenue", "Engagement"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
  const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const router = useRouter();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${localbaseURL}/login`, {
        email,
        password,
      });

      const { token, user } = response.data;
      console.log(response.data);

      const tokenString =
        typeof token === "object" ? JSON.stringify(token) : token;

      Cookies.set("authToken", tokenString, { expires: 7 });
      Cookies.set("fullName", user.fullName, { expires: 7 });
      Cookies.set("email", user.email, { expires: 7 });
      Cookies.set("contact", user.contact, { expires: 7 });
      Cookies.set("userId", user._id);
      const userId = Cookies.get("userId");

      if (typeof window !== "undefined") {
        router.push("/dashboardBuyer");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full h-auto bg-gray-10 flex flex-col overflow-hidden">
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
                width={262} // Adjust the size here
                height={468} // Adjust the size here
                alt="Saly Image"
                className="mt-[20px] h-auto w-[36%] self-end object-contain md:w-full md:self-auto" // Adjusted margin and width
              />

              <div className="flex flex-1 flex-col items-start px-1.5 md:self-stretch">
                <Heading
                  size="heading7xl"
                  as="h2"
                  className="!text-indigo-a400 !text-[48px] font-bold sm:text-[42px] text-center md:text-left"
                >
                  Login in to
                </Heading>

                <Heading
                  size="text9xl"
                  as="h3"
                  className="!text-gray-10 mt-16 !text-[34.28px] sm:!text-[30px] text-center md:text-left"
                >
                  <span className="text-adsy_com-black">Generate&nbsp;</span>
                </Heading>
                <div className="relative h-[72px] self-stretch">
                  <div className="absolute bottom-0 right-[10%] top-0 my-auto h-[60px] w-[64%] bg-indigo-a400" />
                  <div className="absolute left-0 right-0 top-[3.47px] m-auto flex flex-1 flex-col items-start">
                    <Heading
                      size="text13xl"
                      as="h4"
                      className="!text-[46.16px] !text-gray-10 sm:!text-[41px] text-center md:text-left"
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
                  className="ml-1.5 mt-[68px] !font-poppins !text-adsy_com-black md:ml-0 text-center md:text-left"
                >
                  If you do not have an account register
                </Text>
                <Link href="/signup">
                  <Text
                    as="p"
                    className="ml-1.5 mt-1.5 !font-poppins !text-adsy_com-black md:ml-0 text-center md:text-left"
                  >
                    <span className="text-adsy_com-black">You can &nbsp;</span>
                    <span className="font-semibold text-indigo-a400">
                      Sign Up here !
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
              className="self-start !font-poppins !font-medium !text-adsy_com-black text-[22px] sm:text-[28px] text-center md:text-left"
            >
              Log In
            </Text>
            <form
              onSubmit={handleLogin}
              className="mt-6 flex w-full flex-col items-start"
            >
              <Input
                shape="round"
                type="email"
                name="Email or Phone Input"
                placeholder="  Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins"
                style={{ paddingLeft: "1rem" }}
              />
              <Input
                color="blue 50"
                shape="round"
                type={isPasswordVisible ? "text" : "password"}
                name="Password Input"
                placeholder="  Password"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem]"
                style={{ paddingLeft: "1rem" }}
              />
              {errorMessage && (
                <Text as="p" className="text-red-500 mt-2">
                  {errorMessage}
                </Text>
              )}
              <div className="mt-[20px] flex w-[82%] flex-col items-end gap-[18px] md:w-full">
                <Text
                  size="textsm"
                  as="p"
                  className="!font-poppins !font-normal !text-gray-400 text-xs mr-[10rem] md:mr-[10rem] lg:mr-[15rem]"
                >
                  Forgot password ?
                </Text>
              </div>

              <Button
                color="indigo_A400"
                size="2xl"
                className="mt-6 w-[60%] rounded-lg font-poppins font-medium text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: "#3861FB" }}
              >
                Login
              </Button>
              <Link
                href="#"
                className="mt-[2rem] ml-[8rem] md:ml-[50px] lg:ml-[80px]"
              >
                <Text
                  as="p"
                  className="!font-poppins !font-medium !text-gray-400"
                >
                  or continue with
                </Text>
              </Link>
            </form>
            <div className="mt-6 flex flex-row items-center justify-start w-full gap-[3rem] ml-40 sm:-ml-5 md:-ml-2 lg:-ml-0">
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
