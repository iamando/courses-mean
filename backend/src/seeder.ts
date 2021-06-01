import * as dotenv from "dotenv";
dotenv.config();

// Database
import { database } from "./databases/database";

// Models
import { Course } from "./models/CourseModel";

// Datas
import { coursesData } from "./data/coursesData";

class Seeder {
  constructor() {
    database.connect();
  }

  public async seed(): Promise<void> {
    try {
      await Course.deleteMany({});
      await Course.insertMany(coursesData);
      console.log("Data Import Success");
      process.exit();
    } catch (error) {
      console.log("Error in Data Import");
      console.log(error);
      process.exit(1);
    }
  }
}

const seeder = new Seeder();
seeder.seed();
