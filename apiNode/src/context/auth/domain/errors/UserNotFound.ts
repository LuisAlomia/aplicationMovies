export class UserNotFound extends Error {
  constructor() {
    super("Error user not found");
  }
}
