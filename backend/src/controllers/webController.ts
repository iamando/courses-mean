import { Request, Response } from "express";

class WebController {
  public index(req: Request, res: Response) {
    return res.json({
      message: "API in /api/v1",
    });
  }
}

const webController = new WebController();
export { webController };
