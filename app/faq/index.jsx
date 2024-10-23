"use client";
import Footer from "./../common/Footer";
import Header from "./../common/Header";
import React from "react";
import Offer from "./Offer";
import CallToActionSection from "./CallToActionSection";
import HomeFaq from "./HomeFaq";

export default function FAQPage() {
  return (
    <div className="w-full bg-gray-10">
      <div>
        <Offer />
        <Header />
      </div>

      <HomeFaq />

      <CallToActionSection />

      <Footer />
    </div>
  );
}
