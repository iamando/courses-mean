"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// keys
const keys_1 = __importDefault(require("./keys"));
// Database
const database_1 = require("./databases/database");
// Web Routes
const webRoutes_1 = __importDefault(require("./routes/webRoutes"));
// API Routes
const coursesRoutes_1 = __importDefault(require("./routes/coursesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.connectDatabase();
        this.routes();
        this.adminRoutes();
    }
    config() {
        this.app.set("port", keys_1.default.PORT);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    connectDatabase() {
        database_1.database.connect();
    }
    routes() {
        this.app.use("/", webRoutes_1.default);
        this.app.use("/api/v1/courses", coursesRoutes_1.default);
    }
    adminRoutes() { }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server running on PORT: ${this.app.get("port")}`);
        });
    }
}
const server = new Server();
server.start();
