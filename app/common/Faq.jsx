'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

function FAQSection({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="faqWrapper space-y-4">
            {faqs.map((faq, index) => (
                <div className='faqWrap border-b border-gray-200' key={index}>
                    <h4
                        onClick={() => handleToggle(index)}
                        className={`title title-sm fw-semibold mb-0 flex justify-between items-center cursor-pointer text-lg py-4 ${
                            openIndex === index ? 'text-blue-600 bg-blue-100' : 'text-gray-800'
                        } hover:bg-blue-100`} 
                    >
                        {faq.question}
                        <div className="faqIcon">
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                    </h4>
                    {openIndex === index && (
                        <div className="description text-gray-600 transition-all duration-300 ease-in-out max-h-full overflow-hidden py-2">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQSection;
