import { Heading } from "./Heading";
import { Text } from "./Text";
import React from "react";

export default function PaymentInfo({
  longText = "It is a long established",
  descriptionText = "It is a long established fact that a reader will be distracted.",
  dateText = "12 Aug, 2024",
  amountText = "$100",
  BalanceText = "$100",  // Transaction amount
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-7 flex-1`}>
     
      <div className="w-[1150px] flex items-center">
        {/* Date on the left with less space */}
        <Heading size="textsm" as="p" className="text-gray-600 ml-8 flex-none w-[20%]">
          {dateText} 
        </Heading>
        {/* Description with more space */}
        <Text size="textmd" as="p" className="text-gray-700 text-center flex-1 mx-4">
          {descriptionText} 
        </Text>
        {/* Amount on the right with less space */}
        <Heading size="textsm" as="p" className="text-adsy_com-black font-bold text-right mr-8 flex-none w-[15%]">
          {amountText} 
        </Heading>
        <Heading size="textsm" as="p" className="text-adsy_com-black font-bold text-right mr-8 flex-none w-[15%]">
          {BalanceText} 
        </Heading>
      </div>

      <div className="h-px w-full self-stretch bg-gray-400" />
    </div>
  );
}
