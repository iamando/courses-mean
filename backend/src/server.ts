import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

// keys
import keys from "./keys";

// Database
import { database } from "./databases/database";

// Web Routes
import webRoutes from "./routes/webRoutes";

// API Routes
import coursesRoutes from "./routes/coursesRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.connectDatabase();
    this.routes();
    this.adminRoutes();
  }

  config(): void {
    this.app.set("port", keys.PORT);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  connectDatabase(): void {
    database.connect();
  }

  routes(): void {
    this.app.use("/", webRoutes);
    this.app.use("/api/v1/courses", coursesRoutes);
  }

  adminRoutes(): void {}

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server running on PORT: ${this.app.get("port")}`);
    });
  }
}

const server = new Server();
server.start();
