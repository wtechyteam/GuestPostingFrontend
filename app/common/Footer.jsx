"use client";
import Image from "next/image";
import { Img } from "./Img";
import { Input } from "./Input";
import { Text } from "./Text";
import Link from "next/link";
import React from "react";

export default function Footer( props ) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mt-[54px] py-[102px] md:py-5 bg-gray-10`}
    >
      <div className="container-xs sm:gap-[27px] gap-[54px] mb-1.5 flex flex-col items-center px-14 md:px-5">
        <div className="w-[96%] flex items-center justify-between gap-5 md:w-full md-flex-col">
          <div className="w-[54%] mb-1.5 flex items-start justify-between gap-5 self-end md:w-full md-flex-col md:self-auto">
            <div className="w-[48%] flex flex-col items-start gap-3.5 self-center md:w-full">
              <Text
                size="text2xl"
                as="p"
                className="text-[16px] font-normal !text-dark-0"
              >
                Product
              </Text>
              <ul className="flex flex-col items-start gap-3">
                <li>
                  <Link href="#">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Employee Database
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Payroll
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Absences" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Absences
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Time tracking
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Shift planner
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link href="Recruiting" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Recruiting
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[38%] flex flex-col items-start gap-3.5 md:w-full">
              <Text
                size="text2xl"
                as="p"
                className="text-[16px] font-normal !text-dark-0"
              >
                Information
              </Text>
              <ul className="flex flex-col items-start gap-3">
                <li>
                  <Link href="FAQ" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      FAQ
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link href="Blog" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Blog
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link href="Support" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Support
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <Text
                size="text2xl"
                as="p"
                className="text-[16px] font-normal !text-dark-0"
              >
                Company
              </Text>
              <ul className="flex flex-col items-start">
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      About us
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link
                    href="Careers"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3"
                  >
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Careers
                    </Text>
                  </Link>
                </li>

                <Link href="#" className="mt-3">
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[16px] font-normal !text-dark-1"
                  >
                    Contact us
                  </Text>
                </Link>

                <li>
                  <Link href="#" className="mt-3">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[16px] font-normal !text-dark-1"
                    >
                      Lift Media
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-[30px] py-[30px] w-[30%] flex flex-col items-start justify-center gap-5 bg-indigo-800_0c px-11 md:w-full md:px-5 sm:p-5">
            <Text
              size="textlg"
              as="p"
              className="text-[16px] font-normal !text-dark-0"
            >
              Subscribe
            </Text>
            <Input
              shape="round"
              name=" Email Input"
              placeholder={"  Email address"}
              suffix={
                <div className="rounded-[50%] h-[50px] w-[54px] flex items-center justify-center bg-principal_blue">
                  <Img
                    src="img_arrowleft_gray_10.svg"
                    width={16}
                    height={14}
                    alt="Arrow Left"
                    className="rounded-[50%] p-[18px] w-[26px] h-[14px]"
                  />
                </div>
              }
              className=" mr-1.5"
            />
            <Text
              size="textmd"
              as="p"
              className="text-[12px] w-full font-normal leading-5 !text-dark-2"
            >
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </Text>
          </div>
        </div>
        <div className="w-[96%] flex flex-col items-end gap-9 md:w-full">
          <div className="border-[0.505px] h-[1.01px] w-full self-stretch border-solid border-dark-3 bg-dark-3" />
          <div className="w-[60%] flex items-start justify-between gap-5 md:w-full sm:flex-col">
            <ul className="w-[32%] !mt-1.5 flex flex-wrap justify-between gap-5 sm:w-full">
              <li>
                <Link href="Terms" target="_blank" rel="noreferrer">
                  <Text
                    size="textxl"
                    as="p"
                    className="text-[14px] font-normal !text-dark-0"
                  >
                    Terms
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="Privacy" target="_blank" rel="noreferrer">
                  <Text
                    size="textxl"
                    as="p"
                    className="text-[14px] font-normal !text-dark-0"
                  >
                    Privacy
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="Cookies" target="_blank" rel="noreferrer">
                  <Text
                    size="textxl"
                    as="p"
                    className="text-[14px] font-normal text-dark-0"
                  >
                    Cookies
                  </Text>
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 self-center">
              <Image
                src="/images/Linkedin.png"
                width={38}
                height={34}
                alt="User Icon"
                className="h-[34px]"
              />
              <Image
                src="/images/Facebook.png"
                width={38}
                height={34}
                alt="Facebook Icon"
                className="h-[34px]"
              />
              <Image
                src="/images/Twitter.png"
                width={38}
                height={34}
                alt="Thumbs Up Icon"
                className="h-[34px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
