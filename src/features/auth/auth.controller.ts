import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, UseGuards, Post, Req } from '@nestjs/common';
@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService){

    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Req() req:any){
        return await this.authservice.login(req.user)
    }
}
