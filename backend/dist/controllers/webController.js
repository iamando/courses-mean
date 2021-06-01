"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webController = void 0;
class WebController {
    index(req, res) {
        return res.json({
            message: "API in /api/v1",
        });
    }
}
const webController = new WebController();
exports.webController = webController;
