export enum Rol {
  admin = "ADMIN",
  user = "USER",
}

export interface IUser {
  uuid: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  rol: Rol;
  idLike: [];
}
