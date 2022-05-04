import { AuthGuard } from '@nestjs/passport';
import { Controller, UseGuards, Post } from '@nestjs/common';
@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(){
        return {response: "works"};
    }
}
