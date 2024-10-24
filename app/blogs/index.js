"use client";

import Footer from "./../common/Footer";
import Header from "./../common/Header";
import Blog from "./blog";
import BlogSection from "./BlogSection";
import React from "react";
import Offer from "./Offer";
import Image from "next/image";


export default function DesktopTwoPage() {
  
  
return (
    <div className="w-full bg-gray-10">
      <div>
        <Offer />
        <Header />
        </div>
  <Blog/>
  <BlogSection />
    

      {/* Footer */}
      <Footer />
    </div>
  );
}
