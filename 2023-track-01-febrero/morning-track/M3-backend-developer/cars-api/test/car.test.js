const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../src/app')

require('dotenv').config()

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI)
})

afterEach(async () => {
  await mongoose.connection.close()
})

describe("GET /api/cars", () => {
  it("should return all cars", async () => {
    const res = await request(app).get('/api/cars')
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
  })
})

describe("POST /api/cars", () => {
  it("should create a cars", async () => {
    const res = await request(app).post("/api/cars").send({
      model: 'C4',
      brand: 'Citroen',
      description: 'Es muy bonito',
      price: 30000
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.model).toBe("C4");
  });
});
