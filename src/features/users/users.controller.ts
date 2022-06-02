import { ForbiddenError } from '@casl/ability';
import { Body, Controller, Delete, ForbiddenException, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) { }

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<Response> {
    try {
      const user = await this.usersService.create(createUserDto);
      return <Response>res.status(HttpStatus.CREATED).json({ message: user });
    }
    catch (err) {
      if(err instanceof ForbiddenError){
        throw new ForbiddenException(err.message)
      }

      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err.sqlMessage })
    }
  }

  @Get('/list')
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const userList = await this.usersService.findAll();
      return <Response>res.status(HttpStatus.OK).json({ message: userList });
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err });
    }
  }

  @Get('/:id')
  async findById(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    try {
      const user = await this.usersService.findById(+id);
      return <Response>res.status(HttpStatus.OK).json({ message: user });
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ err: err.sqlMessage });
    }
  }

  @Get('/list/:email')
  async findByEmail(@Param('email') email: string, @Res() res: Response): Promise<Response> {
    try {
      const user = await this.usersService.findByEmail(email);
      return <Response>res.status(HttpStatus.OK).json({ message: user });
    }
    catch (err) {
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err });
    }
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response): Promise<Response> {
    try {
      const user = await this.usersService.update(+id, updateUserDto);
      return <Response>res.status(HttpStatus.OK).json({ message: user });
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err })
    }
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    try {
      await this.usersService.remove(+id);
      return <Response>res.status(HttpStatus.OK).json({ message: "User delete" })
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err })
    }
  }
}