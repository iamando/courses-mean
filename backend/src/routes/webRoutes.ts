import { Router } from "express";

// Controllers
import { webController } from "../controllers/webController";

class WebRoutes {
  public router: Router = Router();

  constructor() {
    this.routes();
  }

  routes(): void {
    this.router.get("/", webController.index);
  }
}

const webRoutes = new WebRoutes();
export default webRoutes.router;
