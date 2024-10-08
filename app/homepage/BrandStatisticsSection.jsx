import { Text } from "./../common/Text";
import React from "react";
import Image from "next/image";

export default function BrandStatisticsSection() {
  return (
    <>
      {/* brand statistics section */}
      <div className="flex justify-center lg:flex">
        <div className="container-xs flex items-start justify-center gap-9 px-4 md:flex-col md:px-5 mb-0">
          {/* Image section */}
          <div className="h-[674px] relative flex-1 self-center md:w-full md:flex-none md:self-stretch">
            <Image
              src="/images/Vector 4.png"
              width={590}
              height={544}
              alt="Vector Image"
              className="rounded-[56px] right-[-0.20px] bottom-[0.40px] w-[82%] h-[544px] absolute m-auto object-contain sm:hidden md:hidden lg:block"
            />
            <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 items-start md:relative md:flex-col">
              <Image
                src="/images/Vector 5.png"
                width={144}
                height={130}
                alt="Vector Image"
                className="rounded-[14px] z-[4] w-[18%] h-[130px] relative mt-32 object-contain sm:hidden md:hidden lg:block"
              />
              <Image
                src="/images/Intersect.png"
                width={588}
                height={580}
                alt="Intersect Image"
                className="ml-[-104px] w-[72%] h-[580px] relative self-center object-contain md:ml-0 md:w-[80%] md:h-[350px] sm:w-full sm:h-[200px] sm:hidden md:hidden lg:block "
              />
            </div>
          </div>
          {/* Text section */}
          <div className="gap-[38px] w-[44%] mt-10 flex flex-col md:w-full">
            <Text
              size="text8xl"
              as="p"
              className="sm:text-[28px] md:text-[36px] leading-[54px] !text-black-60_ text-[40px] !font-spacegrotesk2 font-medium ! text-black-70"
            >
              We have stopped counting. Over 500 brands count on us.
            </Text>
            <Text
              size="text5xl"
              as="p"
              className="leading-[25px] text-[20px] font-medium !text-black-60_ sm:text-[16px] sm:leading-[22px]"
            >
              Our 4,000+ team has expertise in almost every programming language.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
