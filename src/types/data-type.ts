export type DataType = {
  id: number;
  imageUrl: string;
  name: string;
  email: string;
  stage: "Applied" | "Interview" | "Evaluation" | "Offer" | "Contacted";
  rating: number;
  appliedJob: string;
  resume: string;
  aiFitScore: string;
  source: string;
  dateAdded: string;
};
export const mockData: DataType[] = [
  {
    id: 1,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    name: "Burak Kızılay",
    email: "burak.kizilay@example.com",
    stage: "Applied",
    rating: 4,
    appliedJob: "Sr. Frontend Dev.",
    aiFitScore: "85%",
    source: "LinkedIn",
    dateAdded: "2023-09-10",
    resume: "resume_1.pdf",
  },
  {
    id: 2,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    stage: "Interview",
    rating: 5,
    appliedJob: "Software Engineer",
    aiFitScore: "70%",
    source: "Indeed",
    dateAdded: "2023-09-15",
    resume: "resume_2.pdf",
  },
  {
    id: 3,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    stage: "Evaluation",
    rating: 3,
    appliedJob: "Data Scientist",
    aiFitScore: "50%",
    source: "Referral",
    dateAdded: "2023-09-20",
    resume: "resume_3.pdf",
  },
  {
    id: 4,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    name: "Carol White",
    email: "carol.white@example.com",
    stage: "Offer",
    rating: 4,
    appliedJob: "Product Manager",
    aiFitScore: "90%",
    source: "Company Website",
    dateAdded: "2023-09-25",
    resume: "resume_4.pdf",
  },
  {
    id: 5,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    name: "David Brown",
    email: "david.brown@example.com",
    stage: "Contacted",
    rating: 2,
    appliedJob: "UX Designer",
    aiFitScore: "60%",
    source: "Job Fair",
    dateAdded: "2023-09-30",
    resume: "resume_5.pdf",
  },
  {
    id: 6,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    name: "Eva Green",
    email: "eva.green@example.com",
    stage: "Applied",
    rating: 5,
    appliedJob: "Backend Developer",
    aiFitScore: "88%",
    source: "LinkedIn",
    dateAdded: "2023-10-01",
    resume: "resume_6.pdf",
  },
];
