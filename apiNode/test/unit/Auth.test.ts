import { LoginUseCase } from "../../src/context/auth/apication/LoginUseCase";
import { IAuthModel } from "../../src/context/auth/domain/models/IAuthModel";
import { IAuthRepository } from "../../src/context/auth/domain/repositories/IAuthRepository";
import { AuthValueObject } from "../../src/context/auth/domain/valueObjects/AuthValueObject";
import { AuthRepositoryMemory } from "../../src/context/auth/infraestructure/persistences/memory/AuthRepositoryMemory";

describe("Login user", () => {
  let loginUseCase: LoginUseCase;
  let authRepository: IAuthRepository;
  let user: IAuthModel;
  let userNameError: IAuthModel;
  let passwordError: IAuthModel;

  beforeAll(() => {
    authRepository = new AuthRepositoryMemory();
    loginUseCase = new LoginUseCase(authRepository);

    user = new AuthValueObject("luis123", "root");
    userNameError = new AuthValueObject("luis12", "root");
    passwordError = new AuthValueObject("luis123", "rootfdf");
  });

  test("Should be able to login user", async () => {
    const login = await loginUseCase.run(user);

    expect(login).toHaveProperty("role");
  });

  test("Should not be able login user", async () => {
    await expect(loginUseCase.run(userNameError)).rejects.toEqual(
      new Error("Error user not found")
    );
  });

  test("Should not be able login user", async () => {
    await expect(loginUseCase.run(passwordError)).rejects.toEqual(
      new Error("Error password not valid")
    );
  });
});
