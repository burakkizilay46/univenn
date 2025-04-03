import React from "react";

const JobBage = ({ title }: { title: string }) => {
  return (
    <span className="px-3 py-1 text-sm font-semibold text-[#6927DA] bg-[#F5F3FF] rounded-full border-[#C3B5FD] border-[1px]">
      {title}
    </span>
  );
};

export default JobBage;
