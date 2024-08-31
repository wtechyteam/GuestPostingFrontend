"use client";
import { Text } from "./../common/Text";
import { Img } from "./../common/Img";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { RatingBar } from "./../common/RatingBar";
import { Input } from "../common/Input";
import Link from "next/link";
import { Slider } from "./../common/Slider";
import Footer from "./../common/Footer";
import Header from "./../common/Header";
import { GoogleMap } from "../common/GoogleMap";
import { TextArea } from "../common/TextArea";
import React from "react";
import ContactCollaborationSection from "./ContactCollaborationSection";
import ContactUsCards from "./ContactUsCards";
import Image from "next/image";
import ContactUS from "./ContactUsForm";

export default function DesktopTwoPage() {
  const [sliderState4, setSliderState4] = React.useState(0);
  const sliderRef4 = React.useRef(null);

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
            <div className="relative h-[626px] w-[42%] content-center rounded-bl-[20px] rounded-tl-[20px] border-b border-l border-t border-solid border-adsy_com-black bg-gray-300 md:h-auto">
              <GoogleMap
                showMarker={false}
                className="mx-auto h-[626px] flex-1 rounded-bl-[20px] rounded-tl-[20px]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-2.5 mr-auto flex h-max flex-1 flex-col items-start gap-[450px] md:ml-0 md:gap-[337px] sm:gap-[225px]">
                <div className="flex w-[62%] flex-col items-start justify-center rounded-sm bg-gray-10 px-3 py-2 shadow-4xl md:w-full">
                  <div className="flex items-start justify-between gap-5 self-stretch">
                    <Text
                      size="textxl"
                      as="p"
                      className="!font-roboto !font-medium !text-adsy_com-black"
                    >
                      lastminute.com London Eye
                    </Text>
                    <Img
                      src="img_link_get_directions.png"
                      width={22}
                      height={22}
                      alt="Get Directions Image"
                      className="mr-6 h-[22px] w-[22px] self-center object-cover"
                    />
                  </div>
                  <div className="relative z-[1] mr-2 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                    <Text
                      size="textmd"
                      as="p"
                      className="!font-roboto !text-gray-700"
                    >
                      Riverside Building, County Hall,
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="self-end !font-roboto !text-blue-600"
                    >
                      Directions
                    </Text>
                  </div>
                  <Text
                    size="textmd"
                    as="p"
                    className="relative mt-[-2px] !font-roboto !text-gray-700"
                  >
                    London SE1 7PB, United Kingdom
                  </Text>
                  <div className="flex flex-wrap items-start self-stretch">
                    <Text
                      size="textxl"
                      as="p"
                      className="self-center !font-roboto !font-medium !text-gray-700"
                    >
                      4.5
                    </Text>
                    <Img
                      src="img_img_rated 4_5.png"
                      width={10}
                      height={10}
                      alt="Rating Star 1"
                      className="h-[10px] w-[10px] object-cover"
                    />
                    <Img
                      src="img_img_rated 4_5.png"
                      width={10}
                      height={10}
                      alt="Rating Star 1"
                      className="h-[10px] w-[10px] object-cover"
                    />
                    <Img
                      src="img_img_rated 4_5.png"
                      width={10}
                      height={10}
                      alt="Rating Star 1"
                      className="h-[10px] w-[10px] object-cover"
                    />
                    <Img
                      src="img_img_rated 4_5.png"
                      width={10}
                      height={10}
                      alt="Rating Star 1"
                      className="h-[10px] w-[10px] object-cover"
                    />
                    <Img
                      src="img_img_rated 4_5.png"
                      width={10}
                      height={10}
                      alt="Rating Star 1"
                      className="h-[10px] w-[10px] object-cover"
                    />
                    <Text
                      size="textmd"
                      as="p"
                      className="ml-2.5 self-end !font-roboto !text-blue-600"
                    >
                      170,029 reviews
                    </Text>
                  </div>
                  <Text
                    size="textmd"
                    as="p"
                    className="mt-2.5 !font-roboto !text-blue-600"
                  >
                    View larger map
                  </Text>
                </div>
                <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
                  <div className="mb-1.5 flex flex-col items-center rounded-[3px] border-2 border-solid border-gray-10 bg-gray-10 p-0.5 shadow-5xl">
                    <Img
                      src="img_region_map.png"
                      width={38}
                      height={38}
                      alt="Region Map Image"
                      className="h-[38px] w-[38px] object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap justify-end self-end sm:self-stretch">
                    <Text
                      size="textxs"
                      as="p"
                      className="flex justify-center bg-gray-100_b2 pl-1 pr-2.5 !font-roboto !font-normal !text-adsy_com-black"
                    >
                      Keyboard shortcuts
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="relative ml-[-2px] bg-gray-100_b2 pl-1 pr-2.5 !font-roboto !font-normal !text-adsy_com-black"
                    >
                      Map data ©2024 Google
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="relative z-[2] ml-[-4px] bg-gray-100_b2 pl-1 pr-2.5 !font-roboto ! font-normal !text-adsy_com-black"
                    >
                      Terms
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="relative ml-[-4px] bg-gray-100_b2 pl-1 pr-2.5 !font-roboto !font-normal !text-adsy_com-black"
                    >
                      Report a map error
                    </Text>
                  </div>
                </div>
              </div>
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
                  // style={{ backgroundColor: '#e0f7fa' }} 
                  className="h-[50px] w-[40%] !rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue sm:w-full"
                />
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder="  Email Address"
                  // style={{ backgroundColor: '#e0f7fa' }} 
                  className="h-[50px] w-[40%] !rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue sm:w-full"
                />
              </div>

              <TextArea
                shape="round"
                name="Message TextArea"
                placeholder="Write a Message"
                // style={{ backgroundColor: '#e0f7fa' }} 
                className="mt-6 w-[82%] rounded-[20px] border border-solid border-gray-10 font-manrope font-medium !text-principal_blue"
              />
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
