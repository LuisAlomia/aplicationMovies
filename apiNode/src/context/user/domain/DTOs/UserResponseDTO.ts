import { Rol } from "../models/IUserModel";

export class UserResponseDTO {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly dateOfBirth: Date;
  readonly rol: Rol;
  readonly idLike: [];
  readonly likes?: [];

  constructor(
    uuid: string,
    name: string,
    lastName: string,
    userName: string,
    email: string,
    dateOfBirth: Date,
    rol: Rol,
    idLike: [],
    likes?: []
  ) {
    this.uuid = uuid;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.rol = rol;
    this.idLike = idLike;
    this.likes = likes;
  }
}
