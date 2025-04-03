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
      imageUrl: "/images/avatars/avatar-1.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Applied",
      rating: 4,
      appliedJob: "Sr. Frontend Dev.",
      resume: "/pdfs/resume-1.pdf",
    },
    {
      id: 2,
      imageUrl: "/images/avatars/avatar-2.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Interview",
      rating: 5,
      appliedJob: "Software Engineering",
      resume: "/pdfs/resume-2.pdf",
    },
    {
      id: 3,
      imageUrl: "/images/avatars/avatar-3.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Evaluation",
      rating: 3,
      appliedJob: "Operations",
      resume: "/pdfs/resume-3.pdf",
    },
    {
      id: 4,
      imageUrl: "/images/avatars/avatar-4.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Applied",
      rating: 4,
      appliedJob: "Software Engineering",
      resume: "/pdfs/resume-4.pdf",
    },
    {
      id: 5,
      imageUrl: "/images/avatars/avatar-5.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Offer",
      rating: 5,
      appliedJob: "Design",
      resume: "/pdfs/resume-5.pdf",
    },
    {
      id: 6,
      imageUrl: "/images/avatars/avatar-6.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Evaluation",
      rating: 3,
      appliedJob: "Finance",
      resume: "/pdfs/resume-6.pdf",
    },
    {
      id: 7,
      imageUrl: "/images/avatars/avatar-7.png",
      name: "Lana Steiner",
      email: "lana.steiner@example.com",
      stage: "Contacted",
      rating: 4,
      appliedJob: "Software Engineering",
      resume: "/pdfs/resume-7.pdf",
    },
  ];
  