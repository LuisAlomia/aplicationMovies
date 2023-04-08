import { IAuthModel } from "../models/IAuthModel";

export class AuthValueObject implements IAuthModel {
  readonly username: string;
  readonly password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
