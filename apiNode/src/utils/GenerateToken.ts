import Jwt from "jsonwebtoken";
import { config } from "../config/config.env";

export class GenerateToken {
  run(id: string, name: string, role: string): string {
    const token = Jwt.sign({ id, name, role }, config.jwt, {
      expiresIn: "1h",
    });

    return token;
  }
}
