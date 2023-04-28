import { Request, Response } from "express";
import Charity from "../models/Charity";

class CharityController {
  static async getAll(req: Request, res: Response) {
    Charity.getAll((error, charities) => {
      if (error) {
        console.log("This is the error: ", error);
        res.status(500).json({ error });
      } else {
        res.json({ charities });
      }
    });
  }
}

export default CharityController;
