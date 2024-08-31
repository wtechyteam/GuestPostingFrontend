import {Img} from "./../common/Img";
import {Button} from "./../common/Button";
import {Heading} from "./../common/Heading";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <>
      {/* call to action section */}
      <div className="mt-[90px] h-[798px] relative">
        <div className="container-xs absolute left-0 right-0 top-0 my-auto flex md:px-5">
          <div className="rounded-[34px] py-[108px] flex w-full flex-col items-center bg-gradient4 px-14 opacity-80 md:p-5">
            <div className="mb-[172px] w-[72%] flex flex-col items-center gap-8 md:w-full">
              <Heading
                size="heading5xl"
                as="h2"
                className="sm:text-[38px] md:text-[44px] leading-[68px] text-[48px] self-stretch text-center font-semibold !text-gray-10"
              >
                Ready to Transform Your Vision into Reality? Let us Get Started!
              </Heading>
              <Link href="/signup">
              <Button shape="round" className="min-w-[170px] font-medium">
                Sign Up
              </Button>
              </Link>
            </div>
          </div>
        </div>
     
      <Image
        src="/images/Intersect (1).png"
        width={770}
        height={408}
        alt="Intersect Image"
        className="w-[54%] h-[408px] absolute bottom-px left-0 right-0 m-auto object-contain"
      />
      </div>
    </>
  );
}