import { Router } from "express";
import CharityController from "../controllers/charity.controller";

const router = Router();

// get all charities in database
router.get("/", CharityController.getAll);
// get one charity's name by its id
router.get("/:id", CharityController.getCharity);

export default router;
