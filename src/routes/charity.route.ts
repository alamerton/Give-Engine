import { Router } from "express";
import CharityController from "../controllers/charity.controller";

const router = Router();

router.get("/charities", CharityController.getAll);
router.get("/charities/:id", CharityController.getCharity);

export default router;
