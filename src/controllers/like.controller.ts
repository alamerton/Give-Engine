import { Request, Response } from "express";
import Like from "../models/Like";

class LikeController {
  static async getLikeByUserId(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.getLikeByUserId(request, (error, like) => {
      if (error && error?.message === "No likes for user") {
        res.status(404).json({ error });
      } else if (error) {
        res.status(500).json({ error });
      } else {
        res.status(201).json({ like });
      }
    });
  }
  static async add(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.create(request, (error) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.sendStatus(201);
      }
    });
  }
  static async remove(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.remove(request, (error) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.sendStatus(200);
      }
    });
  }
}

export default LikeController;
