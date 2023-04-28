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
                callback(null, charities);
            }
        });
    }
    static getCharity(charityId, callback) {
        console.log("This is the charity id getting queried: ", charityId);
        dbconfig_1.default.query(`SELECT * FROM charities WHERE id=${charityId}`, (error, results) => {
            if (error) {
                callback(error);
            }
            else if (results) {
                // the problem is happening in this clause, could be results.
                //Yes, there's no handling for when results is nothing because there is nothing by the ID passed!
                const charity = {
                    id: results[0].id,
                    name: results[0].name,
                    url: results[0].url,
                };
                callback(null, charity);
            }
            else {
                const noCharitiesError = new Error("There is no charity by that ID");
                callback(noCharitiesError);
            }
        });
    }
}
exports.default = Charity;
