import Image from "next/image";
import React, { useState } from "react";

export default function SellerMobileSection({ images, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center w-full rounded-lg "
    >
      <button
        type="button"
        className="bg-[#3171DE] text-gray-10 text-[30px] font-semibold w-[200px] h-[69px] mb-8 rounded-tl-lg rounded-br-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-none"
      >
        For Seller
      </button>

      {/* Flex container for images */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mx-2 ${ // Adjust spacing here
              index === 0 || index === 2 ? "mt-20" : "mt-0" // Conditional margin-top for left and right images
            } my-6`} // Maintain consistent vertical spacing
          >
            <Image 
              src={image.src}
              alt={image.alt}
              width={314.236}
              height={748}
              className="rounded-lg"
              style={{ flexShrink: 0 }} // Prevents image from shrinking
            />
            <p className="mt-2 text-center text-sm text-gray-700 w-[150px]">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
