import { Heading } from "./../common/Heading";
import { Button } from "./../common/Button";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function MainContentSection() {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <>
      {/* Main content section */}
      <div className="mt-[140px] flex flex-col items-center gap-10">
        <div className="container-xs px-14 md:px-5">
        <Heading
    size="heading3xl"
    as="h2"
    className="sm:text-[26px] md:text-[28px] leading-[30px] text-[30px] tracking-[0.20px] text-center font-semibold !text-adsy_com-black"
>
    Publish PR Content on Websites and Telegram<br />
    <span className="text-[20px]">Channels Promote Your Business Easily, Fast, and Safely</span>
</Heading>

        </div>
        <div className="h-[942px] relative self-stretch">
          <div
            className="h-[874px] absolute left-0 right-0 top-0 m-auto flex-1"
            style={{ backgroundColor: "#D8EBFF" }}
          />
          <div className="gap-[26px] absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center px-14 md:px-5">
            <div>
              
              <p className="text-center text-lg  text-gray-900 mt-[50px]">
               
            
                List Of <span className="font-bold">61,608</span>  Websites & Blogs That Accept Guest Posts
              </p>
            </div>
            <div className="rounded-[10px] w-[38%] flex justify-center md:w-full">
              <div className="flex justify-center w-full">
                <Button
                  color="gray_10"
                  size="sm"
                  className={`rounded-[5px] min-w-[250px] tracking-[0.20px] font-medium ${
                    activeTab === "buyer"
                      ? "bg-white text-blue-500 border border-blue-500"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => setActiveTab("buyer")}
                >
                  Buyer
                </Button>
                <Button
                  color="gray_10"
                  size="sm"
                  className={`rounded-[5px] min-w-[250px] tracking-[0.20px] font-medium ${
                    activeTab === "seller"
                      ? "bg-white text-blue-500 border border-blue-500"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => setActiveTab("seller")}
                >
                  Seller
                </Button>
              </div>
            </div>
            <Image
              src={
                activeTab === "buyer"
                  ? "/images/image 3.png"
                  : "/images/image 5.png"
              }
              width={1024}
              height={820}
              alt={activeTab === "buyer" ? "Image Three" : "Image Five"}
              className="rounded-[24px] w-[80%] h-[820px] object-contain"
            />
          </div>
        </div>
        <div className="container-xs flex justify-start items-center px-14 md:px-5 w-full"> {/* Flex container */}
  <div className="text-gray-800 text-md mr-auto"> {/* Date section */}
    <span className="font-bold"> Last Updated: </span> 
    <span className="italic">{new Date().toLocaleDateString()} </span>{/* Display current date */}
  </div>
  <Link href="/signup">
    <Button size="md" className="min-w-[220px] ml-auto font-medium bg-blue-500 text-white transition-colors duration-300">
      Add Your Website
    </Button>
  </Link>
</div>

      </div>
    </>
  );
}
