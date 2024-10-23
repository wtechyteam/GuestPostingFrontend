import Image from "next/image";
import React, { useState } from "react";

export default function BuyerMobileSection({ images, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center w-full rounded-lg p-4 sm:p-8 md:p-10"
    >
      <button
        type="button"
        className="bg-[#3171DE] text-gray-10 text-[30px] sm:text-[24px] md:text-[20px] font-semibold w-[210px] sm:w-[160px] md:w-[140px] h-[69px] sm:h-[60px] md:h-[50px] mb-8 rounded-tl-lg rounded-br-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-none"
      >
        How it Works
      </button>

      {/* Flex container for images */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mx-2 ${
              index === 0 || index === 2 ? "mt-20 sm:mt-16 md:mt-12" : "mt-0"
            } my-6`}
          >
            <Image 
              src={image.src}
              alt={image.alt}
              width={314.236} // Original size for large screens
              height={748} // Original size for large screens
              className="rounded-lg sm:w-[220px] sm:h-[300px] md:w-[280px] md:h-[600px]" // Further reduced height for small screens
              style={{ flexShrink: 0 }}
            />
            <p className="mt-2 text-center text-sm sm:text-xs md:text-xs text-gray-700 w-[150px] sm:w-[120px] md:w-[100px]">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
