import supertest from "supertest";
import { app } from "../../src/express/app";
import { server } from "../../src/express/server";
import mongoose from "mongoose";

beforeEach(async () => {
  const user = await supertest(app).get("/api/v1/users");
  const deleteUser = user.body.find((user: any) => user.name === "andres");
  await supertest(app).delete(`/api/v1/users/${deleteUser.uuid}`);
});

afterEach(async () => {
  server.close();
  await mongoose.connection.close();
});

test("should create a new user", async () => {
  const user = {
    name: "andres",
    lastName: "val",
    userName: "andres123",
    email: "andres@gmail.com",
    password: "root",
    dateOfBirth: new Date(21 - 5 - 1994),
  };

  const resp = await supertest(app).post("/api/v1/users").send(user);

  expect(resp.status).toEqual(201);
  expect(resp.body).toHaveProperty("rol");
});
