import { createConnection } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crud_nestjs1',
      entities: [
            //volta uma pasta e procura entidades 
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      //migrationsRun: true,
      synchronize: true,
    }),
  },
];