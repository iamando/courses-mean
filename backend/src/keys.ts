import * as dotenv from "dotenv";
dotenv.config({ path: "backend/.env" });

export default {
  PORT: process.env["PORT"] || 5000,
  DB_LOCAL_URI:
    process.env["DB_LOCAL_URI"] || "mongodb://localhost:27017/ng_courses",
};
