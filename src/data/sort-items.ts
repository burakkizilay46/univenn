export type SortItemKey = "name" | "email" | "stage" | "rating" | "appliedJob";
export type SortDirection = "A-Z" | "Z-A" | "Low to High" | "High to Low";

export type SortItemType = {
  [key in SortItemKey]: {
    label: string;
    directions: SortDirection[];
  };
};

export const sortItems: SortItemType = {
  name: { label: "Name", directions: ["A-Z", "Z-A"] },
  email: { label: "Email", directions: ["A-Z", "Z-A"] },
  stage: { label: "Stage", directions: ["A-Z", "Z-A"] },
  rating: { label: "Rating", directions: ["Low to High", "High to Low"] },
  appliedJob: { label: "Applied Job", directions: ["A-Z", "Z-A"] },
};
