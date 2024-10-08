import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import React, { useState } from "react";

export default function BuyerInfoSection({ ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`flex items-center w-full md:w-[80%] relative  !text-adsy_com-black
                hover:border-2 hover:border-[#1C817D] hover:rounded-2xl 
                hover:bg-blue-100 p-4`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex w-full flex-row justify-between items-center">
        <div className="flex w-1/2 flex-col items-center space-y-12">
          <h2 className="text-[36px] font-bold">Buyer</h2>
          <ul className="list-disc pl-6 space-y-4 text-[26px]">
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
        <div className="w-1/2 flex justify-end">
        <video
            src="/images/videoupwork.mp4"
            alt="Buyer Info Video"
            className="w-[494px] h-[300px] object-cover rounded-lg"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}
