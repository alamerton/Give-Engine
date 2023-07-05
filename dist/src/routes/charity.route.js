"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charity_controller_1 = __importDefault(require("../controllers/charity.controller"));
const like_controller_1 = __importDefault(require("../controllers/like.controller"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
// Charities
router.get("/charities/", charity_controller_1.default.getAll);
router.get("/getCharityById/:id", charity_controller_1.default.getCharity);
// Likes
router.post("/likes", like_controller_1.default.add);
router.post("/likes/getLikeByUserId", like_controller_1.default.getLikeByUserId);
router.delete("/likes", like_controller_1.default.remove);
// Users
router.get("/users/", user_controller_1.default.getAll);
router.post("/users/create", user_controller_1.default.create);
router.post("/users/signIn", user_controller_1.default.signIn);
exports.default = router;
