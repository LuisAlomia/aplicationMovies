import { UserResponseDTO } from "../DTOs/UserResponseDTO";
import { UserRequireDTO } from "../DTOs/UserRequireDTO";

export interface IUserRepository {
  findByEmail(email: string): Promise<UserResponseDTO | null>;
  findById(userId: string): Promise<UserResponseDTO | null>;
  findAll(): Promise<UserResponseDTO[]>;
  create(user: UserRequireDTO): Promise<UserResponseDTO>;
  delete(userId: string): Promise<any>;
  update(
    userId: string,
    user: Partial<UserRequireDTO>
  ): Promise<UserResponseDTO | null>;
}
