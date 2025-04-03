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

export const mockData: DataType[] = [
  {
    id: 1,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Burak Kızılay",
    email: "burak.kizilay@example.com",
    stage: "Applied",
    rating: 4,
    appliedJob: "Sr. Frontend Dev.",
    resume: "/pdfs/resume-1.pdf",
  },
  {
    id: 2,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Elif Yılmaz",
    email: "elif.yilmaz@example.com",
    stage: "Interview",
    rating: 5,
    appliedJob: "Software Engineer",
    resume: "/pdfs/resume-2.pdf",
  },
  {
    id: 3,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Ahmet Demir",
    email: "ahmet.demir@example.com",
    stage: "Evaluation",
    rating: 3,
    appliedJob: "Operations Manager",
    resume: "/pdfs/resume-3.pdf",
  },
  {
    id: 4,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Zeynep Çelik",
    email: "zeynep.celik@example.com",
    stage: "Applied",
    rating: 4,
    appliedJob: "Software Engineer",
    resume: "/pdfs/resume-4.pdf",
  },
  {
    id: 5,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    stage: "Offer",
    rating: 5,
    appliedJob: "UI/UX Designer",
    resume: "/pdfs/resume-5.pdf",
  },
  {
    id: 6,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Ayşe Özkan",
    email: "ayse.ozkan@example.com",
    stage: "Evaluation",
    rating: 3,
    appliedJob: "Financial Analyst",
    resume: "/pdfs/resume-6.pdf",
  },
  {
    id: 7,
    imageUrl: "https://avatars.githubusercontent.com/u/40871181?v=4",
    name: "Fatih Erdem",
    email: "fatih.erdem@example.com",
    stage: "Contacted",
    rating: 4,
    appliedJob: "Backend Developer",
    resume: "/pdfs/resume-7.pdf",
  },
];
