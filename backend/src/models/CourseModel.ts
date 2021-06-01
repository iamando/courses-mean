import mongoose from "mongoose";

interface ICourse {
  name: string;
  imageUrl: string;
  category: string;
  description: string;
  seller: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
  };
  price: number;
  isFeatured: boolean;
}

interface CourseModelInterface extends mongoose.Model<any> {
  build(attr: ICourse): any;
}

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: [
          "JavaScript",
          "TypeScript",
          "PHP",
          "Python",
          "Ruby",
          "Dart",
          "Flutter",
          "Angular",
          "Vue",
          "React",
          "Laravel",
          "Symfony",
        ],
      },
    },
    description: {
      type: String,
      required: true,
    },
    seller: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<any, CourseModelInterface>(
  "Course",
  courseSchema
);
export { Course };
