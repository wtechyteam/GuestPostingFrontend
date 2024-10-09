import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";

export default function SellerInfoSection({ ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`flex md:flex-col-reverse flex-row md:flex-col items-center w-full md:w-[80%] relative !text-adsy_com-black
                
                 p-4`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:w-full  flex justify-end mb-4 md:mb-2 sm:ml-12 md:ml-8">
        <video
          src="/images/videoupwork.mp4"
          alt="Buyer Info Video"
          className="w-[494px] h-[300px] object-cover rounded-lg"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="md:w-full flex flex-col items-center space-y-12 sm:ml-12 md:ml-8">
        <h2 className="text-[36px] font-bold ">Seller</h2>
        <ul className="list-disc pl-6 space-y-4 text-[26px] md:text-[22px] sm:text-[16px]">
          <li>Place quality blog posts from sellers</li>
          <li>Make money writing your blog</li>
          <li>Get regular payouts, prompt support</li>
        </ul>
        <Link href="/signup">
          <Button
            size="md"
            className="min-w-[220px] ml-3.5 font-medium bg-blue-500 text-white transition-colors duration-300 md:mb-[1rem]"
          >
            List Your Website
          </Button>
        </Link>
      </div>
    </div>
  );
}