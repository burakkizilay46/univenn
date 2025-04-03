import { Button } from "@/components/ui/button";
import plusIcon from "@/../public/images/svg/plus-icon.svg";

const MainHeader = () => {
  return (
    <div className="h-[82px] w-full flex  justify-between border-b">
        <div>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-[30px]">Talent Pool</p>
            <p className="bg-[#F2F4F7] px-[10px] py-[4px] rounded-[18px]">24</p>
          </div>
          <p className="text-[#667085] font-normal text-[16px]">
            Keep track of the applicants
          </p>
        </div>
        <Button className="flex">
          <img src={plusIcon} alt="plus" />
          <p className="font-semibold">Add Talent</p>
        </Button>
    </div>
  );
};

export default MainHeader;
