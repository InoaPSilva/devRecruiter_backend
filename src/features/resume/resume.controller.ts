import { Controller, Get, Post, Res, Body, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { Response } from 'express';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post('/register')
  async create(@Body() createResumeDto: CreateResumeDto, @Res() res:Response){
    try {
      const resume = await this.resumeService.create(createResumeDto);
      return <Response>res.status(HttpStatus.CREATED).json({ message: resume})
    }
    catch (err) {
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({error: err.sqlMessage})
    }
  }

  @Get('/list')
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const resumeList = await this.resumeService.findAll();
      return <Response>res.status(HttpStatus.OK).json({message: resumeList })
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({ error: err})
    }
  }

  //@Get('/:id')
  //async findOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
  //  try{
  //    const resume = this.resumeService.findOne(+id);
  //    return <Response>res.status(HttpStatus.OK).json({message: resume})
  //  }
  //  catch(err) {
  //    console.log(err);
  //    return <Response>res.status(HttpStatus.BAD_REQUEST).json({ err: err.sqlMessage});
  //  }
  //}

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto, @Res() res: Response): Promise<Response> {
    try {
      const updateResume = this.resumeService.update(+id, updateResumeDto);
      return <Response>res.status(HttpStatus.OK).json({ message: updateResume})
    }
    catch(err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({error: err})
    }
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    try{
      const deleteResume = this.resumeService.remove(+id);
      return <Response>res.status(HttpStatus.OK).json({ message: "Resume deletr"})
    }
    catch (err) {
      console.log(err);
      return <Response>res.status(HttpStatus.BAD_REQUEST).json({error: err})
    }
  }
}
