"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = __importDefault(require("../dbconfig"));
class Charity {
    constructor(id, name, url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
    static getAll(callback) {
        dbconfig_1.default.query("SELECT * FROM charities", (error, results) => {
            if (error) {
                callback(error);
            }
            else {
                const charities = results.map((result) => new Charity(result.id, result.name, result.url));
                callback(charities);
            }
        });
    }
}
exports.default = Charity;
