import { CreateUserUseCase } from "../../src/context/user/aplication/CreateUserUseCase";
import { IUserRepository } from "../../src/context/user/domain/repositories/IUserRepository";
import { UserValueObject } from "../../src/context/user/domain/valueObjects/UserValueObject";
import { UserRepositoryMemoryImpl } from "../../src/context/user/infrastructure/persistence/memory/UserRepositoryMemoryImpl";

describe("Create user", () => {
  let userRepository: IUserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    userRepository = new UserRepositoryMemoryImpl();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it("Should be able to create a new user", async () => {
    const user = new UserValueObject(
      "1516546846xxsjkbxksjx",
      "luis",
      "val",
      "luis123",
      "luis@gmail.com",
      "$2b$10$QdhO7bfp8LYNiw43p9QmluLLcl8.H3zMlHTPUok0lLxtH2PJWAguS",
      new Date(21 - 5 - 1994)
    );

    const saveUser = await createUserUseCase.run(user);

    expect(saveUser).toHaveProperty("rol");
    expect(saveUser.email).toBe("luis@gmail.com");
  });

  it("Should not be able to create a new user", async () => {
    const user = new UserValueObject(
      "1516546846xxsjkbxksjx",
      "diego",
      "val",
      "diego123",
      "diego@gmail.com",
      "$2b$10$QdhO7bfp8LYNiw43p9QmluLLcl8.H3zMlHTPUok0lLxtH2PJWAguS",
      new Date(21 - 5 - 1994)
    );

    await expect(createUserUseCase.run(user)).rejects.toEqual(
      new Error("User already exists")
    );
  });
});
