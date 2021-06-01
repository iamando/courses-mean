export interface CourseData {
  id?: number;
  name: string;
  imageUrl: string;
  category: string;
  description: string;
  price: number;
  seller: {
    firstName: string;
    lastName: string;
    imageUrl: string;
    company: string;
    email: string;
  };
}
