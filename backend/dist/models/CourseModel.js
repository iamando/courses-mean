"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const courseSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
const Course = mongoose_1.default.model("Course", courseSchema);
exports.Course = Course;
