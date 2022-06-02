import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
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
