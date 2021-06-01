"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controllers
const coursesController_1 = require("../controllers/coursesController");
class CoursesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", coursesController_1.coursesController.getCourses);
        this.router.get("/:id", coursesController_1.coursesController.getCourse);
    }
}
const coursesRoutes = new CoursesRoutes();
exports.default = coursesRoutes.router;
