import request from "supertest";
import app from "../src/server";

describe("Test server", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body)
  });
});
