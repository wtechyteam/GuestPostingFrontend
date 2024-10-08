import { Heading } from "./../common/Heading";
import Image from "next/image";
import React from "react";

export default function TrustedBySection() {
  return (
    <>
      <div className="bg-gray-10 mt-0 flex flex-col items-center p-2"> {/* Reduced margin-top from mt-14 to mt-8 */}
        <div className="container-xs gap-[5px] flex flex-col items-center px-14 md:px-5"> 
          <Heading
            size="textxl"
            as="h2"
            className="text-[20px] tracking-[0.20px] font-bold !text-adsy_com-black"
          >
            Trusted By
          </Heading>
          <Image
            src="/images/homepage.png"
            width={1080}
            height={140}
            alt="Section Image"
            className="w-[88%] h-[140px] object-contain"
          />
        </div>
      </div>
    </>
  );
}
