import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            email: 'user',
            password: 'password',
        });
    }

    async validate(email:string, password: string): Promise<any>{
        const user = await this.authService.ValidateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}