import React from "react";

const RatingStars = ({ rating }: { rating: number }) => {
  const maxStars = 5;

  return (
    <span className="text-lg">
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-[#FAAF00]" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </span>
  );
};

export default RatingStars;
