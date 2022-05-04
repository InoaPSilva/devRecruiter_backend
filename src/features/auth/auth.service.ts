import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async ValidateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
        
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async ValidateUser(email: string, password:string){
  //     const user = await this.userService.findByEmail(email);
  //     console.log(user);

  //     if(user && user.password === password){
  //         const {id, name, email } = user;
  //         return {id, name, email};
  //     }
  //     return;
  // }
}
