"use client";
import { Text } from "./../common/Text";
import { Button } from "./../common/Button";
import { Heading } from "./../common/Heading";
import { Input } from "../common/Input";
import Link from "next/link";
import Footer from "./../common/Footer";
import Header from "./../common/Header";
import CallToActionSection from "./../common/CallToActionSection";
import BlogSection from "./BlogSection";
import BuyerMobileSection from "./BuyerMobileSection";
import BuyerInfoSection from "./BuyerInfoSection";
import KeyBenefitsSection from "./KeyBenefitsSection";
import Table from "./table";

import React from "react";
import ContactCollaborationSection from "./ContactCollaborationSection";
import ContactUsCards from "./ContactUsCards";
import Image from "next/image";

export default function DesktopTwoPage() {
  const BuyerImages = [
    {
      src: '/images/mobile2.png', // First image source
      alt: 'First Image',
      caption: 'Join & access numerous guest blog posting platforms of opt-in publishers',
    },
    {
      src: '/images/mobile3.png', // Second image source
      alt: 'Second Image',
      caption: 'Discover exclusive content and guest posting opportunities',
    },
    {
      src: '/images/mobile2.png', // Third image source
      alt: 'Third Image',
      caption: 'Boost your online presence through guest blogging',
    },
  ];
  return (
    <div className="w-full bg-gray-10">
      <div>
        <Header />
        <div className="mt-[-2px] relative bg-gray-10">
        <ContactCollaborationSection />
        </div>
      </div>
      <div className="gap-[238px] ml-1 flex self-stretch md:ml-0 md:flex-col">
              <BuyerMobileSection images={BuyerImages} />
              
            </div>
<KeyBenefitsSection/>
<div className="mt-8 mb-8 flex items-center justify-center">
<Table/>
    </div>
          
           
      <BlogSection/>
      <CallToActionSection />

     
      <Footer />
    </div>
  );
}
