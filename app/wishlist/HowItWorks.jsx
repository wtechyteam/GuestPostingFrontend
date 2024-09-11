import React from "react";
import { Text } from "../common/Text";
import { Heading } from "../common/Heading";
import { Img } from "../common/Img";

export default function HowItWorks({ isHowItWorksVisible, toggleHowItWorks }) {
  return (
    <div className="w-full">
      <div
        className="cursor-pointer flex items-center justify-center rounded-md bg-alice_blue px-3.5 shadow-bs1"
        onClick={toggleHowItWorks}
      >
        <div className="flex flex-1 items-start gap-[22px]">
          <div className="flex items-center gap-[18px] self-center">
            <Text size="text9xl" as="p" className="!text-gray-900 !text-[41.14px]">
              ?
            </Text>
            <div className="h-[66px] w-[2px] bg-white-a700" />
          </div>
          <Heading size="heading2xl" as="h1" className="mt-[18px] !text-gray-900 text-[24px] font-semibold">
            How it works?
          </Heading>
        </div>
        <Img
          src="img_vector_blue_gray_900.svg"
          width={10}
          height={3}
          alt="Vector"
          className={`h-[3px] transition-transform ${
            isHowItWorksVisible ? "rotate-180" : ""
          }`}
        />
      </div>

      {isHowItWorksVisible && (
        <div className="p-4 mt-2 bg-alice_blue rounded-md shadow-bs1">
          <Text size="textlg" as="p" className="!text-gray-900">
            Here is the detailed information about how this platform works. You
            can expand and collapse this section to read more or less content.
          </Text>
        </div>
      )}
    </div>
  );
}
