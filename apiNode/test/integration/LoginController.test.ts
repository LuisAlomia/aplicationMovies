import { app } from "../../src/express/app";
import supertest from "supertest";
import mongoose from "mongoose";
import { server } from "../../src/express/server";

afterEach(async () => {
  server.close();
  await mongoose.connection.close();
});

test("should responsed with a json and property token", async () => {
  const resp = await supertest(app).post("/api/v1/auth/login").send({
    username: "diego@gmail.com",
    password: "root",
  });

  expect(resp.status).toEqual(200);
  expect(resp.body).toHaveProperty("token");
});

test("should return excetion unsername incorrect", async () => {
  const resp = await supertest(app).post("/api/v1/auth/login").send({
    username: "diego@gmail.co",
    password: "root",
  });

  expect(resp.status).toBe(400);
  expect(resp.body).toHaveProperty("message");
});

test("should return excetion password incorrect", async () => {
  const resp = await supertest(app).post("/api/v1/auth/login").send({
    username: "diego@gmail.com",
    password: "ro",
  });

  console.log(resp.text);

  expect(resp.status).toBe(400);
  expect(resp.body).toHaveProperty("message");
});
