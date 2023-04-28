import { Router } from "express";
import CharityController from "../controllers/charity.controller";

const router = Router();

router.get("/", CharityController.getAll); // let's get getAll set up and working, then move on to the other one
// get charity name by charity id

export default router;
