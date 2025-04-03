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

type CustomTableProps = {
  headers: string[];
  data?: Array<Record<string, string>>;
  caption?: string;
};

type RowData = Record<string, string>;

const CustomTable = ({
  headers,
  data = [],
  caption = "A list of your recent invoices.",
}: CustomTableProps) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const tableRows = useMemo(() => {
    if (data.length > 0) {
      return data;
    }
    return Array.from({ length: 50 }).map((_, index) =>
      headers.reduce((row, header) => {
        row[header] = header;
        return row;
      }, {} as RowData)
    );
  }, [data, headers]);

  const handleSelectAll = () => {
    if (selectedRows.size === tableRows.length) {
      setSelectedRows(new Set());
    } else {
      const allRowIndices = tableRows.map((_, index) => index);
      setSelectedRows(new Set(allRowIndices));
    }
  };

  const handleRowSelect = (rowIndex: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowIndex)) {
      newSelectedRows.delete(rowIndex);
    } else {
      newSelectedRows.add(rowIndex);
    }
    setSelectedRows(newSelectedRows);
  };

  const isAllSelected =
    selectedRows.size === tableRows.length && tableRows.length > 0;

  return (
    <Table>
      <TableCaption className={caption ? "" : "sr-only"}>
        {caption}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={`header-${header}-${index}`}
              className={classNames("border-r pl-4", {
                "flex gap-2 items-center justify-start": index === 0,
              })}
            >
              {index === 0 && (
                <Checkbox
                  className="size-5 bg-white"
                  aria-label="Select all rows"
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                />
              )}
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map((row, rowIndex) => (
          <TableRow key={`row-${rowIndex}`}>
            {headers.map((header, colIndex) => (
              <TableCell
                key={`cell-${header}-${rowIndex}-${colIndex}`}
                className={classNames("border-r pl-4 py-[10px]", {
                  "flex gap-2 items-center justify-start": colIndex === 0,
                })}
              >
                {colIndex === 0 && (
                  <Checkbox
                    className="size-5 bg-white"
                    aria-label={`Select row ${rowIndex + 1}`}
                    checked={selectedRows.has(rowIndex)}
                    onCheckedChange={() => handleRowSelect(rowIndex)}
                  />
                )}
                {row[header]}
              </TableCell>
            ))}
            <TableCell className="pl-4">
              <img src={dotsIcon} alt="" className="w-5 h-5" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
