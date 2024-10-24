import React from "react";
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import Image from "next/image";

export default function ContactCollaborationSection() {
  
  return (
    <div className="bg-[url(/images/ContactComponent.png)] py-[76px] h-[500px] bg-cover bg-no-repeat bg-center md:h-auto md:py-10 px-5 md:px-10 flex items-center justify-center">
      <div className="text-center">
        <Heading
          size="textxl"
          as="h1"
          className="sm:text-[50px] md:text-[46px] z-[1] text-[50px] font-bold !text-gray-10"
        >
          Get In Touch
        </Heading>
        <Text
          size="text5xl"
          as="p"
          className="text-[25px] mt-[30px] font-medium leading-5 !text-gray-10"
        >
          Tap Into Our Digital Expertise
        </Text>
      </div>
    </div>
  );
}
