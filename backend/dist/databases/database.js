"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Keys
const keys_1 = __importDefault(require("../keys"));
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        try {
            mongoose_1.default
                .connect(keys_1.default.DB_LOCAL_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
                .then((con) => {
                console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}
const database = new Database();
exports.database = database;
