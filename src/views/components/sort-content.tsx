import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortItems, SortItemType } from "@/data/sort-items";

type SortDirection = "A-Z" | "Z-A" | "Low to High" | "High to Low";

type SortContentProps = {
  selectedFilter: keyof SortItemType;
  setSelectedFilter: (filter: keyof SortItemType) => void;
  selectedDirection: string;
  setSelectedDirection: (direction: SortDirection) => void;
};

const SortContent = ({
  selectedFilter = "name",
  setSelectedFilter,
  selectedDirection,
  setSelectedDirection,
}: SortContentProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Select
        value={selectedFilter as string}
        onValueChange={(value: keyof SortItemType) => {
          setSelectedFilter(value);
          setSelectedDirection(sortItems[value].directions[0]);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select column..." />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(sortItems).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedFilter && (
        <Select
          value={selectedDirection}
          onValueChange={(value: SortDirection) => setSelectedDirection(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select direction..." />
          </SelectTrigger>
          <SelectContent>
            {sortItems[selectedFilter].directions.map((direction: string) => (
              <SelectItem key={direction} value={direction}>
                {direction}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default SortContent;
