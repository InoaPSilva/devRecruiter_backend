import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        port: 5432,
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [
          //volta uma pasta e procura entidades
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        //migrationsRun: true,
        synchronize: true,
      }),
  },
];
