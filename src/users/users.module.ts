import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/config/database.module';
import { userProviders } from './entities/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders ,UsersService]
})
export class UsersModule {}
