export class AuthDTO {
  readonly uuid: string;
  readonly name: string;
  readonly email: string;
  readonly role: string;

  constructor(uuid: string, name: string, email: string, role: string) {
    this.uuid = uuid;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
