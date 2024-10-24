import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./../common/Button";

export default function SellerInfoSection({ ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`flex md:flex-col-reverse flex-row md:flex-col items-center w-full md:w-[80%] relative !text-adsy_com-black sm:hidden
                
                 p-4`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
 <div className="flex flex-row md:flex-col md:space-x-12 space-y-16 md:space-y-0">
  {/* Left Section */}
  <div className="md:w-1/2 flex flex-col items-center space-y-6 sm:ml-6 md:ml-0">
    <h2 className="text-[28px] md:text-[36px] font-bold">What you get</h2>
    <ul className="list-disc pl-6 space-y-4 text-[18px] sm:text-[16px] md:text-[22px]">
      <li>Place quality blog posts from sellers</li>
      <li>Make money writing your blog</li>
      <li>Get regular payouts, prompt support</li>
    </ul>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 flex flex-col items-center space-y-6 sm:ml-6 md:ml-0">
    <h2 className="text-[28px] md:text-[36px] font-bold">What you get</h2>
    <ul className="list-disc pl-6 space-y-4 text-[18px] sm:text-[16px] md:text-[22px]">
      <li>Place quality blog posts from sellers</li>
      <li>Make money writing your blog</li>
      <li>Get regular payouts, prompt support</li>
    </ul>
  </div>
</div>



    </div>
  );
}