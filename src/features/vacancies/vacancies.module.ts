import { DatabaseModule } from './../../config/database.module';
import { vacancyProviders } from './entities/vacancy.provider';
import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VacanciesController],
  providers: [...vacancyProviders, VacanciesService],
  exports: [VacanciesService]
})
export class VacanciesModule {}
