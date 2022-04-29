import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/list')
  findAll() {
    return this.usersService.findAll();
    // if (!list) {
    //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // }
  }

  @Get('/list/:id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  @Get('/list/:email')
  findByEmail(@Param('email') email: string) { 
      
    return this.usersService.findByEmail(email);
  }

  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/remove/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
