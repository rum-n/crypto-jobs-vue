export type Job = {
  id: number;
  attributes: {
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    tags: string[];
    description: string;
    publishedAt: string;
  };
};
