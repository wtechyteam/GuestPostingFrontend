import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';

export default function ReviewCardsContainer({ reviews = [] }) {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 10 },
    loop: true,
    // Autoplay configuration
    created() {
      const interval = setInterval(() => {
        sliderRef.current.next();
      }, 1000); // Change slide every 3 seconds

      // Cleanup interval on unmount
      return () => clearInterval(interval);
    },
  });

  return (
    <div className="flex space-x-4 justify-center overflow-hidden">
      {/* Static Review Card */}
      <div className="w-1/4">
  <div className="bg-white shadow-md rounded-lg p-4 border h-56"> 
    <h3 className="text-center text-lg font-semibold text-gray-900">Excellent</h3>

    <div className="flex justify-center space-x-1 my-2 mb-10"> 
  {[...Array(5)].map((_, index) => (
    <div key={index} className="bg-green-500 p-2 r"> 
      <span className="text-white text-2xl">★</span> 
    </div>
  ))}
</div>


    <p className="text-center text-sm text-gray-600">
      Based on <span className="font-bold text-gray-900 underline">456 reviews</span>
    </p>

    <div className="flex justify-center items-center mt-2">
    <span className="text-green-500 text-2xl">★</span> 

      <span className="text-green-500 font-semibold ml-2">Trustpilot</span>
    </div>
  </div>
</div>


      {/* Dynamic Review Cards Slider */}
      <div ref={sliderRef} className="keen-slider w-3/4">
  {reviews.map((review, idx) => (
    <div key={idx} className="keen-slider__slide w-1/2 bg-white p-4 border rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start mb-4 w-full"> {/* Ensure items are aligned properly */}
        <div className="flex items-center">
          {/* 5 Star Icon */}
          {[...Array(review.rating)].map((_, starIdx) => (
            <svg
              key={starIdx}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5 text-green-500 mr-1" // Removed ml-1
              fill="currentColor"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L4.825 7.478a1 1 0 01-.757.545l-4.9.707c-.95.136-1.329 1.307-.637 1.982l3.54 3.454a1 1 0 01.288.885l-.836 4.872c-.16.935.816 1.637 1.61 1.198l4.376-2.301a1 1 0 01.93 0l4.376 2.301c.794.44 1.77-.263 1.61-1.198l-.836-4.872a1 1 0 01.288-.885l3.54-3.454c.692-.675.313-1.846-.637-1.982l-4.9-.707a1 1 0 01-.757-.545L10.949 2.927z" />
            </svg>
          ))}
        </div>
        <div className="text-sm text-gray-500">{review.date}</div> 
      </div>
      <h3 className="text-md text-gray-900 font-semibold mb-2 ">{review.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{review.description}</p>
      <hr className="border-t border-gray-300 mb-2 w-1/4" />
      <div className="text-sm text-gray-900 font-semibold mb-2">{review.reviewer}</div>
    </div>
  ))}
</div>



      
    </div>
  );
}
