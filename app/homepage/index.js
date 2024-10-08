"use client";
import { Text } from "./../common/Text";
import { Img } from "./../common/Img";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { RatingBar } from "./../common/RatingBar";
import { Slider } from "./../common/Slider";
import Footer from "./../common/Footer";
import Header from "./../common/Header";
import BlogSection from "./BlogSection";
import BrandStatisticsSection from "./BrandStatisticsSection";
import CallToActionSection from "./CallToActionSection";
import CollaborationSection from "./CollaborationSection";
import KeyBenefitsSection from "./KeyBenefitsSection";
import MainContentSection from "./MainContentSection";
import TrustedBySection from "./TrustedBySection";
import HowGuestPostingWorks from "./HowGuestPostingWorks";
import React from "react";
import Offer from "./Offer";
import Image from "next/image";
import HomeFaq from "./HomeFaq";
import ReviewCarousel from "./ReviewCarousel";

export default function DesktopTwoPage() {
  const [sliderState4, setSliderState4] = React.useState(0);
  const sliderRef4 = React.useRef(null);
  const reviews = [
    { rating: 5, title: 'Amazing Service!',description: 'Satisfied with the quality. Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. ', date: 'Oct 7, 2024', reviewer: 'John Doe' },
    { rating: 4, title: 'Great Product', description: 'Satisfied with the quality. Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. ', date: 'Oct 5, 2024', reviewer: 'Jane Smith' },
    { rating: 3, title: 'Decent', description: 'Satisfied with the quality. Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. ', date: 'Oct 2, 2024', reviewer: 'Alex Johnson' },
    { rating: 5, title: 'Amazing Service!', description: 'Satisfied with the quality. Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. ', date: 'Oct 7, 2024', reviewer: 'John Doe' },
    { rating: 4, title: 'Great Product', description: 'Satisfied with the quality.  Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. ', date: 'Oct 5, 2024', reviewer: 'Jane Smith' },
  ];
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Exceptional Solutions, Exceeded Expectations!",
      description:
        "Working with Nearshore has been an absolute pleasure.Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations.A reliable choice for any project.",
      authorImage: "/images/Dovetail.png",
      authorName: "Mary Johnson",
      authorTitle: "CEO of TechCraft Solutions",
    },
    {
      id: 2,
      rating: 4,
      text: "Great Experience, Highly Recommend!",
      description:
        "The team provided excellent service and delivered results ahead of schedule. Their professionalism and skill were evident throughout the project. I highly recommend their services.",
      authorImage: "/images/Loom.png",
      authorName: "John Smith",
      authorTitle: "Founder of InnovateTech",
    },
    {
      id: 3,
      rating: 5,
      text: "Outstanding Work, Very Satisfied!",
      description:
        "The project was completed with great attention to detail and a high level of quality. The communication was clear, and the deliverables exceeded our expectations. We are very satisfied with the outcome.",
      authorImage: "/images/Logo.png",
      authorName: "Lisa White",
      authorTitle: "Director of Creative Solutions",
    },
    {
      id: 4,
      rating: 4,
      text: "Impressive Results, Professional Team!",
      description:
        "The team demonstrated exceptional skill and professionalism. The results were impressive, and they managed to address all of our requirements effectively. A reliable choice for any project.",
      authorImage: "/images/Logo.png",
      authorName: "Tom Brown",
      authorTitle: "Product Manager at TechCorp",
    },
    {
      id: 5,
      rating: 5,
      text: "Fantastic Service, Great Value!",
      description:
        "We were thrilled with the service and the value provided. The team was responsive, and the end product was exactly what we needed. We look forward to working with them again in the future.",
      authorImage: "/images/Logo.png",
      authorName: "Emily Davis",
      authorTitle: "CEO of StartUpPro",
    },
    // Add more testimonials here if needed
  ];

  return (
    <div className="w-full bg-gray-10">
      <div>
        <Offer />
        <Header />
        <div className="mt-[-2px] relative bg-gray-10">
          {/* Collaboration section */}
          <CollaborationSection />
        </div>
      </div>

      {/* Trusted by section */}
      <TrustedBySection />
    <ReviewCarousel reviews={reviews} />
  

      {/* Main content section */}
      <MainContentSection />
      <HowGuestPostingWorks/>

      {/* Key benefits section */}
      <KeyBenefitsSection />

      <HomeFaq />

      <div className="mt-[40px]">
        {/* Brand statistics section */}
        <BrandStatisticsSection />
        <Text
  size="text8xl"
  as="p"
  className="hidden sm:block p-5 sm:text-[28px] md:hidden leading-[54px] !text-black-60_ text-[40px] !font-spacegrotesk2 font-medium"
>
  We have stopped counting. Over 500 brands count on us.
</Text>


        <div className="z-[5] mb-[18px] mt-[-294px] relative flex flex-col items-center py-10 sm:py-5 sm:mt-[2rem] md:mt-[2rem]">

          <div className="container-xs sm:gap-[39px] md:gap-[58px] gap-[78px] flex flex-col items-center px-10 md:px-5">
            <div className="gap-[38px] mx-auto flex w-full self-stretch md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 3 },
                }}
                disableDotsControls
                activeIndex={sliderState4}
                onSlideChanged={(e) => {
                  setSliderState4(e?.item);
                }}
                ref={sliderRef4}
                items={testimonials.map((testimonial) => (
                  <React.Fragment key={testimonial.id}>
                    <div className="px-[19px]">
                      <div className="rounded-[20px] border-[0.72px] py-[26px] px-[34px] flex flex-col items-start justify-center border-solid border-neutral_colors-color-300 bg-gray-10">
                        <RatingBar
                          value={testimonial.rating}
                          isEditable={false}
                          size={40}
                          className="flex gap-2.5"
                        />
                        <div className="mt-[30px] flex flex-col gap-2 self-stretch">
                          <Heading
                            size="textmd"
                            as="h2"
                            className="md:text-[22px] text-[24px] !font-dmsans2 font-bold leading-9 !text-blue_gray-900"
                          >
                            &quot;{testimonial.text}&quot;
                          </Heading>
                          <Text
                            size="textmd"
                            as="p"
                            className="leading-[30px] text-[17.32px] !font-dmsans2 font-normal !text-gray-600"
                          >
                            &quot;{testimonial.description}&quot;
                          </Text>
                        </div>
                        <div className="mt-[34px] h-[1.08px] self-stretch bg-gray-300" />
                        <div className="gap-[22px] mt-4 flex items-center self-stretch">
                          <Image
                            src={testimonial.authorImage}
                            width={32}
                            height={32}
                            alt="Author Image"
                            className="w-[32px] h-[32px] self-end object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start gap-1.5">
                            <Heading
                              size="headinglg"
                              as="h3"
                              className="text-[20.21px] !font-dmsans2 font-bold !text-blue_gray-900"
                            >
                              {testimonial.authorName}
                            </Heading>
                            <Heading
                              size="headings"
                              as="h4"
                              className="text-[13px] !font-dmsans2 font-bold !text-black-60_"
                            >
                              {testimonial.authorTitle}
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="gap-[18px] flex">
              <Button
                color="gray_50_01"
                size="2xl"
                shape="circle"
                onClick={() => {
                  sliderRef4?.current?.slidePrev();
                }}
                className="!rounded-[32px] w-[64px]"
              >
                <Image
                  src="/images/arrow-left.png"
                  width={32}
                  height={32}
                  alt="arrow-left"
                />
              </Button>
              <Button
                color="gray_50_01"
                size="2xl"
                shape="circle"
                onClick={() => {
                  sliderRef4?.current?.slideNext();
                }}
                className="!rounded-[32px] w-[64px]"
              >
                <Image
                  src="/images/arrow-right.png"
                  width={32}
                  height={32}
                  alt="arrow-right"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <BlogSection />

      {/* Call to action section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
