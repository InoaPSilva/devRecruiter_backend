import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService){}

    async ValidateUser(email: string, password:string){
        const user = await this.userService.findByEmail(email);
        console.log(user);
        
        if(user && user.password === password){
            const {id, name, email } = user;
            return {id, name, email};
        }
        return;
    }
}
