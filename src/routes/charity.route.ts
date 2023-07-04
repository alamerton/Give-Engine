import { Router } from "express";
import CharityController from "../controllers/charity.controller";

const router = Router();

router.get("/charities", CharityController.getAll);
router.get("/charities/:id", CharityController.getCharity);

router.post("/likes", LikeController.add);
router.post("/likes/getLikeByUserId", LikeController.getLikeByUserId);
router.delete("/likes", LikeController.remove);

export default router;
