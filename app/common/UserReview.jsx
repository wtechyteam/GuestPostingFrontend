import { Heading } from "./Heading";
import { Text } from "./Text";
import { RatingBar } from "./RatingBar";
import React from "react";

export default function UserReview({
  reviewDate = "2 days ago",
  reviewTitle = "Best on the market",
  reviewText =
    "I love this product because the support is great. Please ...",
  reviewerName = "Worldtraveler",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${
        props.className
      } flex flex-col items-start justify-center w-[60%] md:w-full gap-2 px-5 py-[34px] sm:py-5 bg-gray-10 shadow-xs border border-gray-300 rounded-lg`}
    >
      <div className="flex items-start justify-between gap-5 self-stretch">
        <RatingBar
          value={1}
          isEditable={true}
          size={20}
          starCount={1}
          className="mb-1.5 flex gap-2.5"
        />
        <Text
          size="textxl"
          as="p"
          className="text-[12px] self-end font-roboto2 font-light text-adsy_com-black"
        >
          {reviewDate}
        </Text>
      </div>
      <Text
        size="text5xl"
        as="p"
        className="text-[18px] font-roboto2 font-medium text-adsy_com-black"
      >
        {reviewTitle}
      </Text>
      <Text
        size="text2xl"
        as="p"
        className="leading-[22px] text-[14px] w-full font-roboto2 font-light text-adsy_com-black"
      >
        {reviewText}
      </Text>
      
      <div className="w-[24%] h-px bg-gray-400" />
      <Heading
        size="headingmd"
        as="p"
        className="text-[14px] font-roboto2 font-bold text-adsy_com-black"
      >
        {reviewerName}
      </Heading>
    </div>
  );
}
