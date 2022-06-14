import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    // Injetando repositorio do sql no repositorio do user
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {}

  // Criando um novo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.save(createUserDto);
    return <User>user;
  }

  // Listando todos os usuarios
  async findAll(): Promise<User[]> {
    const userList = await this.userRepository.find({
      relations: {
        resume: true,
      },
    });
    return userList;
  }

  // Procurando usuario pelo id
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: {
        resume: true,
      },
    });
    return user;
  }

  // Procurando um usuario pelo email
  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: {
        resume: true,
      },
    });
    return user;
  }

  // Atualizando um usuario
  async update(id: number, user: UpdateUserDto): Promise<UpdateUserDto> {
    const userUpdtate = await this.userRepository.update(id, user);
    return <UpdateUserDto>userUpdtate;
  }

  // Removendo um usuario
  async remove(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
