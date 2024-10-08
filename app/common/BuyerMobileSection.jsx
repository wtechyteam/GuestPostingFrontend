import Image from "next/image";
import React, { useState } from "react";

export default function BuyerMobileSection({ images, ...props }) { // Accept images as a prop
  const [isHovered, setIsHovered] = useState(false);

  // Function to calculate the transformation for the images
  const calculateTransform = (index, total) => {
    const angle = (index * 180) / (total - 1); // Adjust angle for upper semi-circle
    const radius = 200; // Adjust this value for the desired size of the semi-circle
    const x = radius * Math.cos((angle * Math.PI) / 180); // X position
    const y = radius * Math.sin((angle * Math.PI) / 180); // Y position

    return `translate(${x}px, ${-y}px)`; // Adjust position to keep it above the center
  };

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center w-full rounded-lg p-4"
    >
      <button
        type="button"
        className="bg-[#3171DE] text-gray-10 text-[30px] font-semibold w-[200px] h-[69px] rounded-tl-lg rounded-br-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-none"
      >
        For Buyer
      </button>

      {/* Flex container for images */}
      <div className="relative flex justify-center mt-4" style={{ height: '400px', marginTop: '230px' }}>
        {images.map((image, index) => ( // Map over the images prop
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              transform: calculateTransform(index, images.length), // Calculate transform for each image
              transition: 'transform 0.3s', // Optional: smooth transition
            }}
          >
            <Image 
              src={image.src} // Use the src from the image object
              alt={image.alt} // Use the alt text from the image object
              width={314.236} // Set width to 314.236px
              height={748} // Set height to 748px
              className="rounded-lg"
              style={{ flexShrink: 0 }} // Prevents image from shrinking
            />
            <p className="mt-2 text-center text-sm text-gray-700 w-[150px]">
              {image.caption} {/* Dynamic caption for each image */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
