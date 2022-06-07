import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { Vacancy } from './entities/vacancy.entity';

@Injectable()
export class VacanciesService {
  constructor(
    @Inject('VACANCY_REPOSITORY')
    private vacancyRepository: Repository<Vacancy>,
  ) {}

  async create(createVacancyDto: CreateVacancyDto) {
    const vacancy = await this.vacancyRepository.save(createVacancyDto);
    return <Vacancy>vacancy;
  }

  async findAll() {
    const vacancyList = await this.vacancyRepository.find();
    return vacancyList;
  }

  async findById(id: number) {
    const vacancy = await this.vacancyRepository.findOneByOrFail({ id });
    return vacancy;
  }

  async update(id: number, vacancy: UpdateVacancyDto) {
    const vacancyUpdtate = await this.vacancyRepository.update(id, vacancy);
    return <UpdateVacancyDto>vacancyUpdtate;
  }

  async remove(id: number) {
    return await this.vacancyRepository.delete(id);
  }
}
