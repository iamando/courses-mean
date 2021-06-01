"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesController = void 0;
const CourseModel_1 = require("../models/CourseModel");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class CoursesController {
    constructor() {
        this.getCourses = express_async_handler_1.default((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const courses = yield CourseModel_1.Course.find({});
                res.status(200).json({
                    courses,
                });
            }
            catch (error) {
                console.log(error);
            }
        }));
        this.getCourse = express_async_handler_1.default((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const course = yield CourseModel_1.Course.findById(id);
                if (course) {
                    return res.status(200).json({
                        course,
                    });
                }
            }
            catch (error) {
                return res.status(404).json({
                    message: error.message,
                });
            }
        }));
    }
}
const coursesController = new CoursesController();
exports.coursesController = coursesController;
