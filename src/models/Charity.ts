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
    request: any,
    callback: (error: Error | null, charity?: Charity) => void
  ) {
    const requestAsJSON = JSON.parse(request);
    console.log(requestAsJSON);

    // console.log requestAsJSON here to double check what it is. Since I'm passing an id directly by url it should just be the id on its own
    connection.query(`SELECT * FROM charities WHERE id=${requestAsJSON}`);
  }
}
export default Charity;
