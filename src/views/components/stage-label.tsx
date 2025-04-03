import React from "react";

export const StageLabel = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-1 items-center  ">
      <div className="size-[6px] bg-[#36BFFA] rounded-full " />
      <p className="text-xs font-medium text-[#344054]">{title}</p>
    </div>
  );
};
