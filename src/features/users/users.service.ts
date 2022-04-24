import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    //vai inserir user numa tabela sql
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  //this.<respositoriousado>.<funcao>

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  //fica no ar
  async update(id: number, user: UpdateUserDto) {
    return this.userRepository.update(id, user);
  }

  //remove para querry e delete para qualquer coisa
  async remove(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }
}
