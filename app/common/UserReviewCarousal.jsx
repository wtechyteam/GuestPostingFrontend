import React from "react";
import Slider from "react-slick";
import UserReview from "./UserReview"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UserReviewCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      reviewDate: "2 days ago",
      reviewTitle: "Best on the market",
      reviewText: "I love this product because the support is great. Please ...",
      reviewerName: "Worldtraveler",
    },
    {
      reviewDate: "1 week ago",
      reviewTitle: "Amazing experience",
      reviewText: "Great product, highly recommend!",
      reviewerName: "TechGuru",
    },
   
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <UserReview
            key={index}
            reviewDate={review.reviewDate}
            reviewTitle={review.reviewTitle}
            reviewText={review.reviewText}
            reviewerName={review.reviewerName}
          />
        ))}
      </Slider>
    </div>
  );
}
