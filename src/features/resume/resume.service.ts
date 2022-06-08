import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume } from './entities/resume.entity';

@Injectable()
export class ResumeService {

  constructor(
    @Inject('RESUME_REPOSITORY')
    private reumseRepository: Repository<Resume>
  ) {}

  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    const resume = await this.reumseRepository.save(createResumeDto);
    return<Resume> resume;
  }

  //async findById(id: number): Promise<Resume> {
  //  const resumeUpdate = await this.reumseRepository.findOneByOrFail({ id });
  //  return resumeUpdate;
  //}

  async findAll(): Promise<Resume[]> {
    const resumeList = await this.reumseRepository.find();
    return resumeList; 
  }

  async update(id: number, resume: UpdateResumeDto): Promise<UpdateResumeDto> {
    const resumeUpdate = await this.reumseRepository.update(id, resume);
    return <UpdateResumeDto> resumeUpdate; 
  }

  async remove(id: number): Promise<any> {
    return await this.reumseRepository.delete(id);
  }
}
