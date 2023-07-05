import { Router } from "express";
import CharityController from "../controllers/charity.controller";
import LikeController from "../controllers/like.controller";

const router = Router();
// Charities
router.get("/charities", CharityController.getAll);
router.get("/charities/:id", CharityController.getCharity);
// Likes
router.post("/likes", LikeController.add);
router.post("/likes/getLikeByUserId", LikeController.getLikeByUserId);
router.delete("/likes", LikeController.remove);
//

export default router;
