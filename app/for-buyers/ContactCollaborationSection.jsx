import React from "react";
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import Image from "next/image";

export default function ContactCollaborationSection() {
  return (
    <div className="bg-[url(/images/ContactComponent.png)] py-[76px] h-[500px] bg-cover bg-no-repeat bg-center md:h-auto md:py-10 px-5 md:px-10 flex items-center justify-center">
      <div className="flex flex-row md:flex-col items-center justify-between w-full max-w-[1200px]">
        {/* Left Side: Content */}
        <div className="w-1/2 md:w-full text-center md:text-left">
          <Heading
            size="textxl"
            as="h1"
            className="sm:text-[36px] md:text-[46px] z-[1] text-[50px] font-semi-bold !text-gray-10"
          >
            Boost Your Traffic
          </Heading>
          <Text
            size="text5xl"
            as="p"
            className="text-[22px] sm:text-[20px] md:text-[25px] mt-[30px] font-medium leading-[1.2] sm:leading-[1.6] md:leading-[2] !text-gray-10"
          >
            and sales with guest posts on <br /> sites offering do follow links
          </Text>
        </div>

        {/* Right Side: Form */}
        <div className="w-1/2 md:w-full mt-10 md:mt-5 md:pl-0">
          <form className="space-y-4">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-4">
              {/* Name Input */}
              <div className="w-full md:w-1/2 sm:w-full ">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full !bg-gray-10 !px-4 !py-3 border border-gray-300 !text-gray-900 !rounded-md"
                />
              </div>

              {/* Phone Input */}
              <div className="w-full md:w-1/2 sm:w-full  md:mt-0 sm:mt-4">
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full !bg-gray-10 !px-4 !py-3 !text-gray-900 px-4 py-2 border border-gray-300 !rounded-md"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full !bg-gray-10 !px-4 !py-3 !text-gray-900 px-4 py-2 border border-gray-300 !rounded-md"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 md:w-1/3 !py-3 px-4 bg-gray-10 text-gray-900 font-bold rounded-full hover:bg-blue-700 hover:text-gray-10"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
