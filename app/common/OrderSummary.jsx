import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

export default function OrderSummary({
  ordersHeading = "ORDERS",
  orderCount = "08",
  process="03 in process",
  exploreMoreText = "Explore More...",
  totalOrdersText = "Total Number of Orders: ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`group h-[140px] w-[32%] md:w-full md:px-5 bg-gray-10 relative rounded-[14px] transition-transform transition-bg duration-300 hover:bg-custom_blue hover:scale-105`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[140px] flex-1 rounded-[14px] bg-gray-10 hover:bg-custom_blue " />
      
      <Heading
        size="heading4xl"
        as="h4"
        className="absolute z-[1] left-3 mt-[26px] text-3xl font-md text-white group-hover:text-gray-900" 
      >
        {ordersHeading}
      </Heading>

      <Heading size="headingxl" as="p" className="absolute bottom-[20.72px] left-3 m-auto text-indigo-a400 font-bold group-hover:text-white">
        {exploreMoreText}
      </Heading>

      <Text as="p" className="absolute bottom-[-1rem] left-3 top-0 my-auto h-max text-white group-hover:text-gray-900">
        {totalOrdersText}
      </Text>

      <Text as="p" className="absolute bottom-[-1rem] left-52 top-0 my-auto h-max font-bold text-white group-hover:text-gray-900">
        {orderCount}
      </Text>

      <Text as="p" className="absolute bottom-[-1rem] left-60 top-0 my-auto h-max text-[11px] text-red-500 group-hover:text-red">
        {process}
      </Text>
    </div>
  );
}
