import { Heading } from "./Heading";
import { Text } from "./Text";
import React from "react";

export default function TextContentRow({
    longText = "It is a long established",
    descriptionText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    dateText = "12 Aug, 2024",
    ...props
  }) {
    return (
      <div {...props} className={`${props.className} flex flex-col items-center gap-7 flex-1`}>
        <div className="ml-8 flex items-center justify-center self-stretch sm:ml-0">
          <div className="flex flex-1 flex-col items-start gap-0.5 sm:gap-0.5">
            <Heading size="textxl" as="p" className="sm:text-[15px] !text-gray-900 font-bold">
              {longText}
            </Heading>
            <Text size="textmd" as="p" className="w- [76%] !font-poppins leading-[21px] !text-gray-700 sm:w-full">
              {descriptionText}
            </Text>
          </div>
          <Heading size="headings" as="p" className="!font-poppins !text-gray-700 underline">
            {dateText}
          </Heading>
        </div>
        <div className="h-px w-full self-stretch bg-gray-400" />
      </div>
    );
  }