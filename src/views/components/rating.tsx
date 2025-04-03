const RatingStars = ({ rating }: { rating: number }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <span className="text-lg flex items-center">
      {Array.from({ length: maxStars }, (_, index) => {
        if (index < fullStars) {
          return (
            <span key={index} className="text-[#FAAF00]">
              ★
            </span>
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <span key={index} className="text-[#FAAF00]">
              <span className="relative inline-block">
                <span className="text-gray-300">★</span>
                <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-[#FAAF00]">
                  ★
                </span>
              </span>
            </span>
          );
        } else {
          return (
            <span key={index} className="text-gray-300">
              ★
            </span>
          );
        }
      })}
    </span>
  );
};

export default RatingStars;
