import { IUser, Rol } from "../models/IUserModel";

export class UserValueObject implements IUser {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly password: string;
  readonly dateOfBirth: Date;
  readonly rol: Rol;
  readonly idLike: [];

  constructor(
    uuid: string,
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    dateOfBirth: Date
  ) {
    this.uuid = uuid;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.rol = Rol.user;
    this.idLike = [];
  }
}
