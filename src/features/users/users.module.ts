import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';

import { userProviders } from './entities/user.provider';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule,],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [UsersService]
})
export class UsersModule { }
