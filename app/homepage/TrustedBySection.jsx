import {Heading} from "./../common/Heading";
import {Img} from "./../common/Img";
import Image from "next/image";
import React from "react";

export default function TrustedBySection() {
  return (
    <>
      {/* trusted by section */}
      <div className="mt-14 flex flex-col items-center">
        <div className="container-xs gap-[46px] flex flex-col items-center px-14 md:px-5">
          <Heading
            size="textxl"
            as="h2"
            className="text-[28px] tracking-[0.20px] font-bold !text-adsy_com-black"
          >
            Trusted By
          </Heading>
          <Image
            src="/images/trustSection.png"
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