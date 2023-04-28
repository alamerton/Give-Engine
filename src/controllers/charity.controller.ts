import { Response } from "express";
import Charity from "../models/Charity";

class CharityController {
  static async getAll(res: Response) {
    Charity.getAll((error, charities) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ charities });
      }
    });
  }
}

export default CharityController;
