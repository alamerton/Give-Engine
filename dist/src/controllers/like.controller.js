"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Like_1 = __importDefault(require("../models/Like"));
class LikeController {
    static getLikeByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = JSON.stringify(req.body);
            Like_1.default.getLikeByUserId(request, (error, like) => {
                if (error && (error === null || error === void 0 ? void 0 : error.message) === "No likes for user") {
                    res.status(404).json({ error });
                }
                else if (error) {
                    res.status(500).json({ error });
                }
                else {
                    res.status(201).json({ like });
                }
            });
        });
    }
    static add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = JSON.stringify(req.body);
            Like_1.default.create(request, (error) => {
                if (error) {
                    res.status(500).json({ error });
                }
                else {
                    res.sendStatus(201);
                }
            });
        });
    }
    static remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = JSON.stringify(req.body);
            Like_1.default.remove(request, (error) => {
                if (error) {
                    res.status(500).json({ error });
                }
                else {
                    res.sendStatus(200);
                }
            });
        });
    }
}
exports.default = LikeController;
