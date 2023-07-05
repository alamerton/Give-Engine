import { Router } from "express";
import CharityController from "../controllers/charity.controller";
import LikeController from "../controllers/like.controller";
import UserController from "../controllers/user.controller";

const router = Router();
// Charities
router.get("/charities", CharityController.getAll);
router.get("/charities/:id", CharityController.getCharity);
// Likes
router.post("/likes", LikeController.add);
router.post("/likes/getLikeByUserId", LikeController.getLikeByUserId);
router.delete("/likes", LikeController.remove);
// Users
router.get("/users/", UserController.getAll);
router.post("/users/create", UserController.create);
router.post("/users/signIn", UserController.signIn)

export default router;
