"use client";
import { Img } from "./../common/Img";
import { Text } from "./../common/Text";
import { Heading } from "./../common/Heading";
import { Slider } from "./../common/Slider";
import React from "react";
import Image from "next/image";

export default function BlogSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Define your blog content
  const blogContents = [
    {
      imageSrc: "/images/f59b797a963f815a5bdc.jpg.png",
      title:
        "Content Placement and Writing & Placement - New Approaches to Habitual Services. How they work.",
    },
    {
      imageSrc: "/images/0a1c5b180093643cd97f.jpg.png",
      title: "13 Free Sources to Get Backlinks to Your Site",
    },
    {
      imageSrc: "/images/b4193834200a873d414c.jpg.png",
      title: "How Keywords Work in SEO. Figuring It Out with Adsy's Expert.",
    },
  ];

  return (
    <div className="z-[6]  relative flex justify-center">
      <div className="container-xs flex justify-center px-12 md:px-5">
        <div className="w-full">
          <div className="mr-1.5 flex items-center justify-center py-8 md:mr-0 sm:py-5">
            <Heading
              size="heading3xl"
              as="h3"
              className="sm:text-[26px] md:text-[28px] text-[30px] font-bold !text-adsy_com-black"
            >
              Recent Searches
            </Heading>
            <div className="flex flex-1 items-center justify-end self-end px-3">
              <Heading
                size="headinglg"
                as="h5"
                className="text-[20px] !font-poppins2 font-semibold !text-adsy_com-black sm:hidden"
              >
                More News
              </Heading>
              <Image
                src="/images/Frame.png"
                width={28}
                height={28}
                alt="Arrow Image"
                className="h-[28px] ml-2 sm:hidden" // Added margin-left
              />
            </div>
          </div>
          <div className="mt-[-6px] relative mx-auto flex w-full md:mr-0 md:flex-col">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 3 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e?.item)}
              ref={sliderRef}
              items={blogContents.map((blog, index) => (
                <React.Fragment key={index}>
                  <div className="gap-[46px] flex flex-col items-start">
                    <Image
                      src={blog.imageSrc}
                      width={348}
                      height={238}
                      alt={`Slider Image ${index + 1}`}
                      className="rounded-[10px] w-[88%] h-[238px] object-contain mx-auto"
                    />
                    <Text
                      size="text5xl"
                      as="p"
                      className="text-[20.21px] !font-poppins2 font-normal leading-7 !text-adsy_com-lynch md:text-center sm:text-center"
                    >
                      {blog.title}
                    </Text>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
