const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/app");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

/* Testing the API endpoints. */
describe("GET /api/comics", () => {
  it("should return all comics", async () => {
    const res = await request(app).get("/api/comics");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/comics/:id", () => {
  it("should return a comic", async () => {
    const res = await request(app).get(
      "/api/comics/6409b626d64d2c19d657b9b2"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Batman return dark knight");
  });
});

describe("POST /api/comics", () => {
  it("should create a comic", async () => {
    const res = await request(app).post("/api/comics").send({
      name: "Batman year one",
      price: 1009,
      description: "Description Batman year one",
      rating: 8
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Batman year one");
  });
});

describe("PUT /api/comics/:id", () => {
  it("should update a comic", async () => {
    const res = await request(app)
      .patch("/api/comics/6409b626d64d2c19d657b9b2")
      .send({
        name: "Batman return dark knight",
        price: 104,
        description: "Description Batman return dark knight",
        rating: 10
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(104);
  });
});

describe("DELETE /api/comics/:id", () => {
  it("should delete a comic", async () => {
    const res = await request(app).delete(
      "/api/comics/6408fbdbaa595c383aa1f936"
    );
    expect(res.statusCode).toBe(200);
  });
});