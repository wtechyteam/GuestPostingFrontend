import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import React, { useState } from "react";

export default function BuyerInfoSection({ ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`flex flex-row md:flex-col items-center w-full md:w-[80%] relative !text-adsy_com-black
               p-4`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
<div className="flex w-full md:w-full flex-col items-center space-y-12 sm:justify-left sm:ml-12 md:ml-8">

  <h2 className="text-[36px] md:text-[36px] font-bold">Buyer</h2>
  <ul className="list-disc pl-6 space-y-4 text-[26px] md:text-[22px] sm:text-[16px] ">
    <li>Place quality blog posts from buyers</li>
    <li>Make money writing your blog</li>
    <li>Get regular payouts, prompt support</li>
  </ul>
  <Link href="/signup">
    <Button
      size="md"
      className="min-w-[220px] ml-3.5 font-medium bg-blue-500 text-white transition-colors duration-300"
    >
      List Your Website
    </Button>
  </Link>
</div>

      <div className="w-full md:full flex justify-end mt-6 md:mt-5 sm:justify-left sm:ml-12 md:ml-8">
        <video
          src="/images/videoupwork.mp4"
          alt="Buyer Info Video"
          className="w-full md:w-[494px] h-[300px] object-cover rounded-lg"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}
