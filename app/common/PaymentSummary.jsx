import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img"; // This import is unused, consider removing it if not needed
import React from "react";

const data = [
  {
    longText: "It is a long established",
    descriptionText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    dateText: "12 Aug, 2024",
  },
  // Additional entries can be added here
];

export default function OrderSummary({
  ordersHeading = "$0.00",
  totalOrdersText = "Total Number of Orders: ",
  buttonText="Add Funds",
  ...props
}) {
  return (
    <div
      {...props}
      className={`group h-[140px] w-[32%] md:w-full md:px-5 bg-gray-10 relative rounded-[14px] transition-transform transition-bg duration-300 hover:bg-custom_blue hover:scale-105`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[140px] flex-1 rounded-[14px] bg-gray-10 hover:bg-custom_blue" />
      
      <Heading
        size="heading4xl"
        as="h4"
        className="absolute z-[1] left-3 mt-[26px] text-3xl font-md text-white group-hover:text-gray-900 font-bold" 
      >
        {ordersHeading}
      </Heading>

      <Text as="p" className="absolute bottom-[-1rem] left-3 top-10 my-auto h-max text-white group-hover:text-gray-900">
        {totalOrdersText}
      </Text>

     
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-1rem] ">
  <button 
    className="font-bold rounded-md hover:bg-blue-600 w-[152px] h-[37px]" 
    style={{ backgroundColor: '#0036FF', color: 'white' }}
    
  >
    {buttonText}
  </button>
</div>



    </div>
  );
}
