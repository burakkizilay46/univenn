import { useMemo, useState } from "react";
import classNames from "classnames";
import dotsIcon from "@/../public/images/svg/dots.svg";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataType } from "@/types/data-type";

type HeaderType = {
  title: string;
  key: keyof DataType;
  checked: boolean;
};

type CustomTableProps = {
  headers: HeaderType[];
  data?: DataType[];
  caption?: string;
};

const CustomTable = ({
  headers,
  data = [],
  caption = "A list of your recent candidates.",
}: CustomTableProps) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const visibleHeaders = headers.filter((header) => header.checked);

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((row) => row.id)));
    }
  };

  const handleRowSelect = (rowId: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId);
    } else {
      newSelectedRows.add(rowId);
    }
    setSelectedRows(newSelectedRows);
  };

  const isAllSelected = selectedRows.size === data.length && data.length > 0;

  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-full">
        <TableCaption className={caption ? "" : "sr-only"}>
          {caption}
        </TableCaption>
        <TableHeader>
          <TableRow>
            {visibleHeaders.map((header, index) => (
              <TableHead
                key={header.key}
                className={classNames("border-r px-4", {
                  "flex gap-2 items-center justify-start": index === 0,
                })}
              >
                {index === 0 && (
                  <Checkbox
                    aria-label="Select all rows"
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                  />
                )}
                {header.title}
              </TableHead>
            ))}
            <TableHead className="px-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {visibleHeaders.map((header, colIndex) => (
                <TableCell
                  key={`${header.key}-${row.id}`}
                  className={classNames("border-r px-4 py-[10px]", {
                    "flex gap-2 items-center justify-start": colIndex === 0,
                  })}
                >
                  {colIndex === 0 && (
                    <Checkbox
                      aria-label={`Select row ${row.id}`}
                      checked={selectedRows.has(row.id)}
                      onCheckedChange={() => handleRowSelect(row.id)}
                    />
                  )}
                  {header.key === "imageUrl" ? (
                    <img
                      src={row.imageUrl}
                      alt={row.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : header.key === "rating" ? (
                    <span>{"★".repeat(row.rating)}</span>
                  ) : header.key === "resume" ? (
                    <a
                      href={row.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      PDF
                    </a>
                  ) : (
                    row[header.key]
                  )}
                </TableCell>
              ))}
              <TableCell className="px-4">
                <img src={dotsIcon} alt="More options" className="w-5 h-5" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
