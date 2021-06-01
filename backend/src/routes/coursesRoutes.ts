import { Router } from "express";

// Controllers
import { coursesController } from "../controllers/coursesController";

class CoursesRoutes {
  public router: Router = Router();

  constructor() {
    this.routes();
  }

  routes(): void {
    this.router.get("/", coursesController.getCourses);
    this.router.get("/:id", coursesController.getCourse);
  }
}

const coursesRoutes = new CoursesRoutes();
export default coursesRoutes.router;
