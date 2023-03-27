import { Rol } from "../entities/IUserEntity";

export class UserResponseDTO {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly dateOfBirth: Date;
  readonly rol: Rol;
  readonly idLike: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    userName: string,
    email: string,
    dateOfBirth: Date,
    rol: Rol,
    idLike: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.rol = rol;
    this.idLike = idLike;
  }
}
