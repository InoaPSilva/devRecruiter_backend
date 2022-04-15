import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  //pega oq tem no database e exporta ele
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
