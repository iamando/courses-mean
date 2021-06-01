"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controllers
const webController_1 = require("../controllers/webController");
class WebRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", webController_1.webController.index);
    }
}
const webRoutes = new WebRoutes();
exports.default = webRoutes.router;
