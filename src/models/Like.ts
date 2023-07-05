import { get } from "http";
import connection from "../dbconfig";
import { v4 as uuid } from "uuid";

class Like {
  id: string;
  userId: string;
  charityId: string;
  dateLiked: string;

  constructor(
    id: string,
    userId: string,
    charityId: string,
    dateLiked: string
  ) {
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

  static getLikeByUserId(
    request: any,
    callback: (error: Error | null, like: Like | null) => void
  ) {
    const requestAsJSON = JSON.parse(request);
    connection.query(
      `SELECT * FROM likes WHERE userId='${requestAsJSON.userId}'`,
      (error, results) => {
        if (error) {
          callback(error, null);
        } else if (!results[0]) {
          const noLikesError = new Error("No likes for user");
          callback(noLikesError, null);
        } else {
          // This method just selects the first like in the list for now
          const like: Like = {
            id: results[0]?.id,
            userId: results[0]?.userId,
            charityId: results[0]?.charityId,
            dateLiked: results[0]?.dateLiked,
          };
          callback(null, like);
        }
      }
    );
  }

  static create(request: any, callback: (error: Error | null) => void) {
    const requestAsJSON = JSON.parse(request);
    const likeID: string = uuid();
    const like: Like = {
      id: likeID,
      userId: requestAsJSON.userId,
      charityId: requestAsJSON.charityId,
      dateLiked: this.getDate(),
    };
    connection.query(
      `INSERT INTO likes (id, userId, charityId, dateLiked) VALUES ('${like.id}', '${like.userId}', '${like.charityId}', '${like.dateLiked}')`,
      (error) => {
        if (error) {
          callback(error);
        } else {
          callback(null);
        }
      }
    );
  }

  static remove(request: any, callback: (error: Error | null) => void) {
    const requestAsJSON = JSON.parse(request);
    const userId: string = requestAsJSON.userId;
    const charityId: string = requestAsJSON.charityId;
    connection.query(
      `DELETE FROM likes WHERE userId = '${userId}' AND charityId = '${charityId}'`,
      (error) => {
        if (error) {
          callback(error);
        } else {
          callback(null);
        }
      }
    );
  }
}

export default Like;
