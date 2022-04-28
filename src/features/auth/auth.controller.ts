import { LocalAuthGuard } from './guards/local-auth.guard';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';
@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req:any){
        return req.user;
    }
}
