import exp from "constants";
import { Router } from "express";

const router = Router();

router.get("/", charityController.getAll); // let's get getAll set up and working, then move on to the other one
// get charity name by charity id

export default router;
