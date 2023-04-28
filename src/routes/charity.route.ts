import { Router } from "express";
import CharityController from "../controllers/charity.controller";

const router = Router();

router.get("/", CharityController.getAll);
router.get("/:id", CharityController.getCharity);

export default router;
