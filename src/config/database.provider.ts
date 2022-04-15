import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'dev_recruter',
        entities: [
          //volta uma pasta e procura entidades
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        //migrationsRun: true,
        synchronize: true,
      }),
  },
];
