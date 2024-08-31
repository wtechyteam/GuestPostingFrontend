"use client";
import { Text } from "./../common/Text";
import { Img } from "./../common/Img";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { Input } from "../common/Input";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoginOnePage() {
  const words = ["Sales", "Leads", "Revenue", "Engagement"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="w-full bg-gray-10">
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
                  Login in to
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
                <Link
                  href="/signup"
                  target="_blank"
                >
                  <Text
                    as="p"
                    className="ml-1.5 mt-1.5 !font-poppins !text-adsy_com-black md:ml-0"
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
              className="self-start !font-poppins !font-medium !text-adsy_com-black text-[22px] sm:text-[28px]"
            >
              Log In
            </Text>

            <div className="mt-6 flex w-[82%] flex-col items-start md:w-full">
              <Input
                shape="round"
                type="email"
                name="Email or Phone Input"
                placeholder="  Enter email or Phone Number"
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins"
              />
              <Input
                color="blue 50"
                shape="round"
                type="password"
                name="Password Input"
                placeholder="  Password"
                suffix={
                  <Image
                    src="/images/invisible.png"
                    width={16}
                    height={16}
                    alt="Invisible 1"
                    className="h-[16px] w-[16px] mr-[1rem]"
                  />
                }
                className="w-[60%] h-[60px] bg-[#E7ECFF] text-[#3861FB] placeholder-[#3861FB] font-poppins mt-[1rem]"
              />
              <div className="mt-[20px] flex w-[82%] flex-col items-end gap-[18px] md:w-full">
                <Text
                  size="textsm"
                  as="p"
                  className="!font-poppins !font-normal !text-gray-400 text-xs mr-[9rem]"
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
              <Link href="#" className="ml-[120px] mt-[2rem] md:ml-0 ">
                <Text
                  as="p"
                  className="!font-poppins !font-medium !text-gray-400"
                >
                  or continue with
                </Text>
              </Link>
            </div>
            <div className="mt-11 flex ml-[-14rem]">
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
                alt="Favorite Icon"
                className="ml-4 h-[40px] w-[40px]"
              />
              <Image
                src="/images/google.png"
                width={40}
                height={40}
                alt="Google Icon"
                className="ml-[12px] h-[40px] w-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
