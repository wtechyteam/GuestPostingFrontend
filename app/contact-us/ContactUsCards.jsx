import React, { useState } from 'react';

const ContactUsCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container-xs px-5 md:px-10 mt-[2rem]">
      <div className="flex flex-row justify-between gap-5">
        {[ 
          {
            title: 'About',
            content: 'Publish PR Content on Websites and Telegram Channels. Promote Your Business Easily, Fast, and Safely.'
          }, 
          {
            title: 'Contact',
            content: '666 888 0000\nneedhelp@company.com\nMon - Fri: 7:00 am - 6:00 pm'
          }, 
          {
            title: 'Address',
            content: '80 Brooklyn Golden Street Line\nNew York, USA'
          } 
        ].map((card, index) => (
          <div
            key={index}
            className={`flex flex-col w-[369.98px] h-[220px] p-[20px] px-[50px] pb-[45px] 
              border border-gray-200 rounded-lg flex-shrink-0 transition-colors duration-300
              ${hoveredCard === index ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-2xl font-normal mb-2">{card.title}</h3>
            <p className="leading-8">{card.content}</p> {/* Increased line spacing */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsCards;
