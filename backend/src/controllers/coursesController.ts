import { Course } from "../models/CourseModel";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";

class CoursesController {
  constructor() {}

  public getCourses = expressAsyncHandler(
    async (req: Request, res: Response) => {
      try {
        const courses = await Course.find({});

        res.status(200).json({
          courses,
        });
      } catch (error) {
        console.log(error);
      }
    }
  );

  public getCourse = expressAsyncHandler(
    async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (course) {
          return res.status(200).json({
            course,
          });
        }
      } catch (error) {
        return res.status(404).json({
          message: error.message,
        });
      }
    }
  );
}

const coursesController = new CoursesController();
export { coursesController };
