import React from "react";
import { IFeedback } from "~/types";

const mackFeedbacks = [
  {
    name: "John Doe",
    position: "Founder at Company",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "I tried many matcha powders before, but this one is the best. I love it!",
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
    <div className="bg-yellow-50 p-5 rounded-lg shadow-lg">
      <p className="text-gray-500 mb-5">{feedback}</p>
      <div className="flex items-center">
        <img src={image} alt="" className="w-12 h-12 rounded-full" />
        <div className="ml-5">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="py-10 my-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-matcha-100">What Our Customers Say About Us 🤩</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mackFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.name} {...feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
