"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", CharityController.getAll); // let's get getAll set up and working, then move on to the other one
// get charity name by charity id
exports.default = router;
