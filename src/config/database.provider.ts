import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'ec2-52-22-136-117.compute-1.amazonaws.com',
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'd5a6qihfcrm4qu',
        entities: [
          //volta uma pasta e procura entidades
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        //migrationsRun: true,
        synchronize: true,
      }),
  },
];
