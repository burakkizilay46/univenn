import { DataType } from "@/types/data-type";
import { useState, useMemo } from "react";
import {
  SortItemKey,
  SortDirection as UISortDirection,
  sortItems,
} from "@/data/sort-items";

type InternalSortDirection = "asc" | "desc";
type SortableColumn = SortItemKey;

interface SortConfig {
  column: SortableColumn;
  direction: InternalSortDirection;
}

export const useDynamicSort = (initialData: DataType[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    column: "name",
    direction: "asc",
  });

  const uiToInternalDirection = (
    uiDirection: UISortDirection
  ): InternalSortDirection => {
    return uiDirection === "A-Z" || uiDirection === "Low to High"
      ? "asc"
      : "desc";
  };

  const internalToUiDirection = (
    internalDirection: InternalSortDirection,
    column: SortableColumn
  ): UISortDirection => {
    if (column === "rating") {
      return internalDirection === "asc" ? "Low to High" : "High to Low";
    }
    return internalDirection === "asc" ? "A-Z" : "Z-A";
  };

  const sortedData = useMemo(() => {
    const dataCopy = [...initialData];

    return dataCopy.sort((a, b) => {
      if (sortConfig.column === "rating") {
        return sortConfig.direction === "asc"
          ? a.rating - b.rating
          : b.rating - a.rating;
      }

      const aValue = a[sortConfig.column].toString();
      const bValue = b[sortConfig.column].toString();

      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue, "tr")
        : bValue.localeCompare(aValue, "tr");
    });
  }, [initialData, sortConfig]);

  const handleColumnChange = (column: SortableColumn) => {
    setSortConfig({
      column,
      direction: "asc",
    });
  };

  const handleDirectionChange = (uiDirection: UISortDirection) => {
    setSortConfig((prev) => ({
      ...prev,
      direction: uiToInternalDirection(uiDirection),
    }));
  };

  const getCurrentUiDirection = (): UISortDirection => {
    return internalToUiDirection(sortConfig.direction, sortConfig.column);
  };

  return {
    sortedData,
    sortConfig: {
      ...sortConfig,
      uiDirection: getCurrentUiDirection(),
    },
    columnOptions: sortItems,
    handleColumnChange,
    handleDirectionChange,
    uiToInternalDirection,
    internalToUiDirection,
  };
};
