"use client";
import { Text } from "./../common/Text";
import { Img } from "./../common/Img";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { Input } from "../common/Input";
import Link from "next/link";
import Footer from "./../common/Footer";
import Header from "./../common/Header";
import ReCAPTCHA from "react-google-recaptcha";
import { TextArea } from "../common/TextArea";
import React from "react";
import ContactCollaborationSection from "./ContactCollaborationSection";
import ContactUsCards from "./ContactUsCards";
import Image from "next/image";

export default function DesktopTwoPage() {
  return (
    <div className="w-full bg-gray-10">
      <div>
        <Header />
        <div className="mt-[-2px] relative bg-gray-10">
          {/* Collaboration section */}
          <ContactCollaborationSection />
        </div>
      </div>
      <ContactUsCards />

      <div className="container-sm mt-[82px] px-14 md:px-5">
        <div className="mr-[34px] h-[626px] rounded-[20px] border border-solid border-adsy_com-black bg-gray-10 bg-[url(/images/img_group_850.png)] bg-cover bg-no-repeat md:mr-0 md:h-auto">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {/* Replacing GoogleMap with an Image */}
            <div className="relative h-[626px] w-[42%] content-center rounded-bl-[20px] rounded-tl-[20px] border-b border-l border-t border-solid border-adsy_com-black bg-gray-300 md:h-auto">
              <Image
                src="/path-to-your-image.jpg" // Update with your image path
                alt="Contact Image"
                width={500} // Set appropriate width
                height={626} // Set appropriate height
                className="object-cover rounded-bl-[20px] rounded-tl-[20px]"
              />
            </div>

            <div className="flex w-[50%] flex-col items-start md:w-full">
              <Link href="#">
                <Text
                  size="text6xl"
                  as="p"
                  className="!font-manrope !text-teal-600"
                >
                  Contact us
                </Text>
              </Link>
              <Heading
                size="textxl"
                as="h1"
                className="sm:text-[50px] md:text-[46px] z-[1] text-[50px] font-bold mt-[1rem]"
                style={{ color: 'black' }}
              >
                Write a Message
              </Heading>

              <div className="mt-[18px] flex gap-6 self-stretch sm:flex-col">
                <Input
                  shape="round"
                  type="text"
                  name="Name Input"
                  placeholder="  Name"
                  className="h-[50px] w-[40%] !rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue sm:w-full"
                />
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder="  Email Address"
                  className="h-[50px] w-[40%] !rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue sm:w-full"
                />
              </div>

              <TextArea
                shape="round"
                name="Message TextArea"
                placeholder="Write a Message"
                className="mt-6 w-[82%] rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue"
              />

<div className="mt-[18px]">
  
  <ReCAPTCHA
    sitekey="YOUR_SITE_KEY" 
    onChange={(value) => console.log("Captcha value:", value)}
    className="h-[78px] w-[304px] rounded-md"
  />
</div>

              <div className="mt-[18px] flex w-[30%] items-center justify-center md:w-full">
                <Button className="min-w-[100px] rounded-[20px] !bg-adsy_com-blue !font-manrope !font-medium">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
