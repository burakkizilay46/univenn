export type DataType = {
  id: number;
  imageUrl: string;
  name: string;
  email: string;
  stage: "Applied" | "Interview" | "Evaluation" | "Offer" | "Contacted";
  rating: number;
  appliedJob: string;
  resume: string;
};


export const tableData: DataType[] = [
  {
    id: 1,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Burak Kızılay",
    email: "lana.steiner@example.com",
    stage: "Applied",
    rating: 4,
    appliedJob: "Sr. Frontend Dev.",
    resume: "/pdfs/resume-1.pdf",
  },
  {
    id: 2,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Interview",
    rating: 5,
    appliedJob: "Software Engineering",
    resume: "/pdfs/resume-2.pdf",
  },
  {
    id: 3,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Evaluation",
    rating: 3,
    appliedJob: "Operations",
    resume: "/pdfs/resume-3.pdf",
  },
  {
    id: 4,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Applied",
    rating: 4,
    appliedJob: "Software Engineering",
    resume: "/pdfs/resume-4.pdf",
  },
  {
    id: 5,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Offer",
    rating: 5,
    appliedJob: "Design",
    resume: "/pdfs/resume-5.pdf",
  },
  {
    id: 6,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Evaluation",
    rating: 3,
    appliedJob: "Finance",
    resume: "/pdfs/resume-6.pdf",
  },
  {
    id: 7,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Lana Steiner",
    email: "lana.steiner@example.com",
    stage: "Contacted",
    rating: 4,
    appliedJob: "Software Engineering",
    resume: "/pdfs/resume-7.pdf",
  },
];
