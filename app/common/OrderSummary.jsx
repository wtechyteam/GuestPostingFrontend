import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

export default function OrderSummary({
  // ordersHeading = "ORDERS",
  // orderCount = "08",
  orderStatus,
  exploreMoreText = "Explore More...",
  totalOrdersText = "Total Number of Orders: ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[140px] w-[32%] md:w-full md:px-5 bg-gray-10 relative rounded-[14px]`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[140px] flex-1 rounded-[14px] bg-gray-10" />
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center">
        <Heading size="heading4xl" as="h4" className="relative z-[1] mt-[26px]">
          {ordersHeading}
        </Heading>
        <div className="relative ml-[-70px] h-[426px] flex-1 content-center self-center">
          <Img
            src="img star 1.svg"
            width={482}
            height={426}
            alt="Star Image"
            className="mx-auto h-[426px] w-full flex-1 rotate-[29deg] rounded-[18px] shadow-sm"
          />
          <div className="absolute left-0 right-0 top-[18%] m-auto flex flex-wrap items-center gap-[11px]">
            <Heading size="heading2xl" as="h6">
              {orderCount}
            </Heading>
            <Text size="textmd" as="p" className="self-end !text-[10.29px] !font-normal">
              <span className="text-[9px] text-red-a700_01">03</span>
              <span className="text-adsy_com-black">&nbsp;</span>
              <span className="text-[9px] text-red-a700_01">on Process</span>
            </Text>
          </div>
        </div>
      </div> */}
      <Heading size="headingxl" as="p" className="absolute bottom-[20.72px] left-3 m-auto text-indigo-a400 font-bold">
  {exploreMoreText}
</Heading>

<Text as="p" className="absolute bottom-0 left-3 top-0 my-auto h-max">
{totalOrdersText}
</Text>
    </div>
  );
}