'use client'
import FAQSection from './../common/Faq';
import React from 'react';

function HomeFaq() {
    const generalFaqs = [
        {
            question: 'What is Lorem Ipsum?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        },
        {
            question: 'What is Lorem Ipsum?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        },
        {
            question: 'What is Lorem Ipsum?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'What is Lorem Ipsum?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'What is Lorem Ipsum?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'What is Lorem Ipsum?',
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        },
        {
            question: "What is Lorem Ipsum?",
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ];

    return (
        <section className='py-16'>
            <div className='max-w-8xl mx-auto px-4'>
                <FAQSection faqs={generalFaqs} />
            </div>
        </section>
    );
}

export default HomeFaq;
