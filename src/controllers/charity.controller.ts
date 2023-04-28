import { Response } from "express";

class CharityController {
  static async getAll(res: Response) {
    Charity.getAll((error, charities)) => {
    if (error) {
        res.status(500).json({error})
    } else {
        res.json({ charities })
    }
  }
}
