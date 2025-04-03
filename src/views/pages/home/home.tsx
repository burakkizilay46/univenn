import { useEffect, useState } from "react";
import sortIcon from "@/../public/images/svg/sort.svg";
import columnsIcon from "@/../public/images/svg/columns.svg";
import sheetIcon from "@/../public/images/svg/sheet-view.svg";
import flash from "@/../public/images/svg/flash.svg";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomPopover from "@/views/components/popover";
import CustomTable from "@/views/components/table";
import { Switch } from "@/components/ui/switch";
import { DataType, mockData } from "@/types/data-type";
import useDebouncedValue from "@/hooks/useDebounce";

const HomeView = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search, 300);
  const [tableData, setTableData] = useState<DataType[]>(mockData);

  const [headers, setHeaders] = useState<
    { title: string; key: keyof DataType; checked: boolean }[]
  >([
    { title: "Name", key: "name", checked: true },
    { title: "Email", key: "email", checked: true },
    { title: "Stage", key: "stage", checked: true },
    { title: "Rating", key: "rating", checked: true },
    { title: "Applied Job", key: "appliedJob", checked: true },
    { title: "Resume", key: "resume", checked: true },
  ]);

  const handleSwitchChange = (index: number) => {
    if (index !== 0) {
      setHeaders((prevHeaders) =>
        prevHeaders.map((header, i) =>
          i === index ? { ...header, checked: !header.checked } : header
        )
      );
    }
  };

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setTableData(mockData);
    } else {
      setTableData(
        mockData.filter((item) =>
          item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      );
    }
  }, [debouncedSearch]);

  return (
    <div className="h-full w-full pt-6">
      <div className="flex justify-end h-8 gap-3 items-center">
        <Input
          placeholder="Search"
          className="h-8 w-[140px] rounded-md border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <CustomPopover label="Sort" icon={sortIcon}>
          <p>Place content for the popover here.</p>
        </CustomPopover>

        <CustomPopover label="Columns" icon={columnsIcon}>
          {headers.map((header, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center py-1"
            >
              <div className="flex gap-2 items-center">
                <img src={flash} alt="flash" className="h-5 w-5" />
                <p className="font-medium text-base leading-6">
                  {header.title}
                </p>
              </div>
              <Switch
                checked={header.checked}
                onCheckedChange={() => handleSwitchChange(index)}
              />
            </div>
          ))}
        </CustomPopover>

        <CustomPopover label="Sheet View" icon={sheetIcon}>
          <p>Place content for the popover here.</p>
        </CustomPopover>

        <Popover>
          <PopoverTrigger className="flex bg-white h-8 w-8 justify-center items-center rounded-md border border-gray-300">
            <span className="text-gray-600">...</span>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>

      <div className="pt-6 w-full h-full">
        <CustomTable headers={headers} data={tableData} />
      </div>
    </div>
  );
};

export default HomeView;
