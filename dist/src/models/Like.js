"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = __importDefault(require("../dbconfig"));
const uuid_1 = require("uuid");
class Like {
    constructor(id, userId, charityId, dateLiked) {
        this.id = id;
        this.userId = userId;
        this.charityId = charityId;
        this.dateLiked = dateLiked;
    }
    static getDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const date = day + "-" + month + "-" + year;
        return date;
    }
    static getLikeByUserId(request, callback) {
        const requestAsJSON = JSON.parse(request);
        dbconfig_1.default.query(`SELECT * FROM likes WHERE userId='${requestAsJSON.userId}'`, (error, results) => {
            var _a, _b, _c, _d;
            if (error) {
                callback(error, null);
            }
            else if (!results[0]) {
                const noLikesError = new Error("No likes for user");
                callback(noLikesError, null);
            }
            else {
                // This method just selects the first like in the list for now
                const like = {
                    id: (_a = results[0]) === null || _a === void 0 ? void 0 : _a.id,
                    userId: (_b = results[0]) === null || _b === void 0 ? void 0 : _b.userId,
                    charityId: (_c = results[0]) === null || _c === void 0 ? void 0 : _c.charityId,
                    dateLiked: (_d = results[0]) === null || _d === void 0 ? void 0 : _d.dateLiked,
                };
                callback(null, like);
            }
        });
    }
    static create(request, callback) {
        const requestAsJSON = JSON.parse(request);
        const likeID = (0, uuid_1.v4)();
        const like = {
            id: likeID,
            userId: requestAsJSON.userId,
            charityId: requestAsJSON.charityId,
            dateLiked: this.getDate(),
        };
        dbconfig_1.default.query(`INSERT INTO likes (id, userId, charityId, dateLiked) VALUES ('${like.id}', '${like.userId}', '${like.charityId}', '${like.dateLiked}')`, (error) => {
            if (error) {
                callback(error);
            }
            else {
                callback(null);
            }
        });
    }
    static remove(request, callback) {
        const requestAsJSON = JSON.parse(request);
        const userId = requestAsJSON.userId;
        const charityId = requestAsJSON.charityId;
        dbconfig_1.default.query(`DELETE FROM likes WHERE userId = '${userId}' AND charityId = '${charityId}'`, (error) => {
            if (error) {
                callback(error);
            }
            else {
                callback(null);
            }
        });
    }
}
exports.default = Like;
