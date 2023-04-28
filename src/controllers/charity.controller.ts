import { Request, Response } from "express";
import Charity from "../models/Charity";

class CharityController {
  static async getAll(req: Request, res: Response) {
    Charity.getAll((error, charities) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ charities });
      }
    });
  }
  static async getCharity(req: Request, res: Response) {
    const charityId = req.params.id
    Charity.getCharity(request, (error, charity) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ charity });
      }
    });
  }
}

export default CharityController;
