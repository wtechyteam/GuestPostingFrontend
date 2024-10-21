import React from 'react';

const ReviewCard = ({ rating, title, description, author, date }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-green-500' : 'fill-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.909c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.813l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.813.588-1.813h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    } 
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full"> {/* Ensure the card takes full width of its container */}
      <div className="flex items-center">
        <div className="flex">{renderStars()}</div>
        <div className="ml-3 text-gray-600 text-sm">{date}</div>
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-500 text-sm mt-3">{author}</p>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* 1 column on small screens, 2 columns on medium and larger screens */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 w-full"> {/* Ensure the card takes full width of its container */}
          <h2 className="text-2xl font-semibold text-blue-800">Excellent</h2>
          <div className="flex items-center mt-3">
            <div className="flex">
              <svg
                className="h-8 w-8 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.909c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.813l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.5 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.813.588-1.813h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="ml-3 text-gray-600 text-sm">4.9/5</div>
          </div>
          <p className="text-gray-600 mt-3">
            Based on 100+ reviews from our customers
          </p>
        </div>
        <ReviewCard
          rating={4}
          title="Great product!"
          description="I love this product! It's amazing."
          author="John Doe"
          date="2022-01-01"
        />
        <ReviewCard
          rating={5}
          title="Excellent service!"
          description="The service was top-notch. Highly recommend."
          author="Jane Doe"
          date="2022-01-02"
        />
        <ReviewCard
          rating={3}
          title="Good product, but..."
          description="The product is good, but the delivery was slow."
          author="Bob Smith"
          date="2022-01-03"
        />
      </div>
    </div>
  );
};

export default ReviewSection;
