import { ForbiddenError } from '@casl/ability';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  ForbiddenException,
  Res,
  Put,
} from '@nestjs/common';
import { Response } from 'express';

import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';

@Controller('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Post('/register')
  async create(
    @Body() createVacancyDto: CreateVacancyDto,
    @Res() res: Response,
  ) {
    try {
      const user = await this.vacanciesService.create(createVacancyDto);

      return <Response>res.status(HttpStatus.CREATED).json({ message: user });
    } catch (err) {
      if (err instanceof ForbiddenError) {
        throw new ForbiddenException(err.message);
      }

      return <Response>(
        res.status(HttpStatus.BAD_REQUEST).json({ error: err.sqlMessage })
      );
    }
  }

  @Get('/list')
  async findAll(@Res() res: Response) {
    try {
      const userList = await this.vacanciesService.findAll();
      return <Response>res.status(HttpStatus.OK).json({ message: userList });
    } catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.vacanciesService.findById(+id);
      return <Response>res.status(HttpStatus.OK).json({ message: user });
    } catch (err) {
      console.log(err);
      return <Response>(
        res.status(HttpStatus.BAD_REQUEST).json({ err: err.sqlMessage })
      );
    }
  }

  @Put('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateVacancyDto: UpdateVacancyDto,
    @Res() res: Response,
  ) {
    try {
      const user = await this.vacanciesService.update(+id, updateVacancyDto);
      return <Response>res.status(HttpStatus.OK).json({ message: user });
    } catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err });
    }
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.vacanciesService.remove(+id);
      return <Response>(
        res.status(HttpStatus.OK).json({ message: 'vacancy deleted' })
      );
    } catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err });
    }
  }
}
