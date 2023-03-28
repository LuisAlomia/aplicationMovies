import { Rol } from "../entities/IUserEntity";

export class UserRequireDTO {
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly password: string;
  readonly dateOfBirth: Date;
  readonly rol: Rol;
  readonly idLike: [];

  constructor(
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    rol: Rol,
    idLike: []
  ) {
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.rol = rol;
    this.idLike = idLike;
  }
}
