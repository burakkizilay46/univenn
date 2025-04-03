import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import down from "@/../public/images/svg/down.svg"

interface CustomPopoverProps {
  icon?: string;
  label?: string;
  children: React.ReactNode;
}

const CustomPopover: React.FC<CustomPopoverProps> = ({ icon, label, children }) => {
  return (
    <Popover>
      <PopoverTrigger className="min-w-[85px] flex bg-white border border-[#D0D5DD] h-8 px-2 justify-center items-center gap-2 rounded-md shadow-sm hover:bg-gray-100">
        {icon && <img src={icon} alt={label} />}
        {label && <p className="font-semibold text-xs leading-[18px]">{label}</p>}
        <img src={down} alt="down"/>
      </PopoverTrigger>
      <PopoverContent className="min-w-[212px]" align="end">{children}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
