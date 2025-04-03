import sortIcon from "@/../public/images/svg/sort.svg";
import columnsIcon from "@/../public/images/svg/columns.svg";
import sheetIcon from "@/../public/images/svg/sheet-view.svg";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomPopover from "@/views/components/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomTable from "@/views/components/table";

const HomeView = () => {
  return (
    <div className="h-full w-full pt-6">
      <div className="flex justify-end h-8 gap-3">
        <Input placeholder="Search" className="h-8 w-[140px]" />
        <CustomPopover label="Sort" icon={sortIcon}>
          Place content for the popover here.
        </CustomPopover>
        <CustomPopover label="Columns" icon={columnsIcon}>
          Place content for the popover here.
        </CustomPopover>
        <CustomPopover label="Sheet View" icon={sheetIcon}>
          Place content for the popover here.
        </CustomPopover>
        <Popover>
          <PopoverTrigger className="flex bg-white  h-8 justify-center items-center whitespace-nowrap">
            . . .
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="pt-6 w-full h-full">
       <CustomTable headers={["Name", "Email", "Stage","Rating","Applied Job","Resume"]}/>
      </div>
    </div>
  );
};

export default HomeView;
