import React from "react";
import { IFeedback } from "~/types";

const mackFeedbacks = [
  {
    name: "John Doe",
    position: "Founder at Company",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "I tried many matcha powders before, but this one is the best. I love it! I tried many matcha powders before, but this one is the best. I love it! I tried many matcha powders before, but this one is the best. I love it!",
  },
  {
    name: "Jane Doe",
    position: "Designer at Company",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "First time trying matcha powder and I'm in love with it. I will buy it again 💕",
  },
  {
    name: "Alice Doe",
    position: "Founder at Company",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "I tried many matcha powders before, but this one is the best. I love it!",
  },
  {
    name: "John Doe",
    position: "Founder at Company",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "I tried many matcha powders before, but this one is the best. I love it! I tried many matcha powders before, but this one is the best. I love it! I tried many matcha powders before, but this one is the best. I love it!",
  },
  {
    name: "Jane Doe",
    position: "Designer at Company",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "First time trying matcha powder and I'm in love with it. I will buy it again 💕",
  },
  {
    name: "Alice Doe",
    position: "Founder at Company",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "I tried many matcha powders before, but this one is the best. I love it!",
  },
];

const FeedbackCard = ({ name, position, image, feedback }: IFeedback) => {
  return (
    <div className="relative mb-8 sm:break-inside-avoid shadow-lg rounded-lg">
      <blockquote className="bg-gray-50 p-4 sm:p-8 rounded-lg">
        <div className="flex items-center gap-4">
          <img
            alt={name}
            src={image}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{feedback}</p>
      </blockquote>
      <div className="absolute justify-center bg-transparent right-0 bottom-0 p-2">
        <img
          src="/assets/images/star-rating.png"
          alt="star"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-16 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-matcha-100 font-title">
          What Our Customers Say About Us
          <img
            src="/assets/images/star.png"
            alt="quote"
            className="ml-4 w-9 h-9 inline-block"
          />
        </h2>
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {mackFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.name} {...feedback} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border border-matcha-100 text-matcha-700 px-4 py-2 rounded-lg">
          Add your feedback
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
