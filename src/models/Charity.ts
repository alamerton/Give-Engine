import connection from "../dbconfig";
import { Request } from "express";

class Charity {
  id: string;
  name: string;
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
  static getAll(
    callback: (error: Error | null, charities?: Charity[]) => void
  ) {
    connection.query("SELECT * FROM charities", (error, results) => {
      if (error) {
        callback(error);
      } else {
        const charities = results.map(
          (result: any) => new Charity(result.id, result.name, result.url)
        );
        callback(null, charities);
      }
    });
  }
  static getCharity(
    charityId: any,
    callback: (error: Error | null, charity?: Charity) => void
  ) {
    console.log("This is the charity id getting queried: ", charityId);
    connection.query(
      `SELECT * FROM charities WHERE id=${charityId}`,
      (error, results) => {
        if (error) {
          callback(error);
        } else if (!!results) {
          // the problem is happening in this clause, could be results.
          //Yes, there's no handling for when results is nothing because there is nothing by the ID passed!
          const charity: Charity = {
            id: results[0].id,
            name: results[0].name,
            url: results[0].url,
          };
          callback(null, charity);
        } else {
          const noCharitiesError = new Error("There is no charity by that ID");
          callback(noCharitiesError);
        }
      }
    );
  }
}
export default Charity;
