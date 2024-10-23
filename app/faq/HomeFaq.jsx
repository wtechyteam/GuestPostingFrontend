"use client";
import FAQSection from "./../common/Faq";
import React from "react";

function HomeFaq() {
  const generalFaqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="py-16 bg-white-50">
      <div className="container-xs mx-auto px-4">
        <div className="title_section text-center mb-1 md:mb-0">
          <h2 className="text-[50px] font-bold text-gray-800 mb-2 md:mb-0">
            FAQs
          </h2>
        </div>
        <FAQSection faqs={generalFaqs} />
      </div>
    </section>
  );
}

export default HomeFaq;
