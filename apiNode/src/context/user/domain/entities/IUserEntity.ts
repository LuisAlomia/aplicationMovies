export enum Rol {
  admin = "ADMIN",
  user = "USER",
}

export interface IUser {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  rol: Rol;
  idLike: string;
}
