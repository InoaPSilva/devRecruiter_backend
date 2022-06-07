import { Connection } from 'typeorm';
import { Vacancy } from './vacancy.entity';

export const vacancyProviders = [
  {
    provide: 'VACANCY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Vacancy),
    inject: ['DATABASE_CONNECTION'],
  },
];
