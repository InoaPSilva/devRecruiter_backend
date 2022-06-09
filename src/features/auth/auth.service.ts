import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user) {
    console.log('userlogin', user)
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      role: user.isAdmin,
      token: this.jwtService.sign(payload),
    };
  }

  async ValidateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log(result)
      return result;
    }
    return null;
  }
}
