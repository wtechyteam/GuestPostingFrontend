import React, { useEffect, useState } from 'react';

export default function ReviewCardsContainer({ reviews = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = reviews.length;

  // Create a duplicated array for seamless transition
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % duplicatedReviews.length); // Cycle through slides
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [duplicatedReviews.length]);

  return (
    <div className="flex space-x-4 justify-center overflow-hidden">
      {/* Static Review Card */}
      <div className="w-1/4">
        <div className="bg-white shadow-md rounded-lg p-4 border h-56">
          <h3 className="text-center text-lg font-semibold text-gray-900">Excellent</h3>
          <div className="flex justify-center space-x-1 my-2 mb-10">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-[#219653] p-2">
                <span className="text-white text-2xl">★</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            Based on <span className="font-bold text-gray-900 underline">456 reviews</span>
          </p>
          <div className="flex justify-center items-center mt-2">
            <span className="text-[#219653] text-2xl">★</span>
            <span className="text-[#219653] font-semibold ml-2">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Dynamic Review Cards Slider */}
      <div className="relative w-3/4 overflow-hidden">
        <div
          className="keen-slider flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentSlide / duplicatedReviews.length) * 100}%)` }} // Move slider
        >
          {duplicatedReviews.map((review, idx) => (
            <div key={idx} className="keen-slider__slide w-1/3 bg-white p-4 border rounded-lg shadow-md flex flex-col mx-1">
              <div className="flex justify-between items-start mb-4 w-full">
                <div className="flex items-center space-x-1 ml-1">
                  {/* 5 Star Icon */}
                  {[...Array(5)].map((_, starIdx) => (
                    <div
                      key={starIdx}
                      className={`bg-[#219653] p-0.5 flex items-center justify-center ${starIdx < review.rating ? 'block' : 'hidden'}`}
                    >
                      <span className="text-white text-xl">★</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <h3 className="text-md text-gray-900 font-semibold mb-2">{review.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{review.description}</p>
              <hr className="border-t border-gray-300 mb-2 w-1/4" />
              <div className="text-sm text-gray-900 font-semibold mb-2">{review.reviewer}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .keen-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .keen-slider__slide {
          min-width: 33.33%; /* Ensure each slide takes up 1/3 of the container */
        }
      `}</style>
    </div>
  );
}
