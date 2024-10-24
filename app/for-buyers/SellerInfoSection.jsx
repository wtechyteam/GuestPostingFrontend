import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./../common/Button";

export default function SellerInfoSection({ ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`flex md:flex-col-reverse flex-row md:flex-col items-center w-full md:w-[80%] relative !text-adsy_com-black sm:hidden md:hidden
                
                 p-4`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
   <div className="flex flex-row md:flex-col space-x-16 md:space-x-12"> 
  <div className="md:w-1/2 flex flex-col items-center space-y-12 sm:ml-12 md:ml-8">
    <h2 className="text-[36px] font-bold">What you get</h2>
    <ul className="list-disc pl-6 space-y-4 text-[26px] md:text-[22px] sm:text-[16px]">
      <li>Place quality blog posts from sellers</li>
      <li>Make money writing your blog</li>
      <li>Get regular payouts, prompt support</li>
    </ul>
  </div>

  <div className="md:w-1/2 flex flex-col items-center space-y-12 sm:ml-12 md:ml-8">
    <h2 className="text-[36px] font-bold">What you get</h2>
    <ul className="list-disc pl-6 space-y-4 text-[26px] md:text-[22px] sm:text-[16px]">
      <li>Place quality blog posts from sellers</li>
      <li>Make money writing your blog</li>
      <li>Get regular payouts, prompt support</li>
    </ul>
  </div>
</div>



    </div>
  );
}