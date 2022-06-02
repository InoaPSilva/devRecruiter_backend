import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';
import { UserRolesModule } from './features/user-roles/user-roles.module';
import { VacanciesModule } from './features/vacancies/vacancies.module';

@Module({
  imports: [UsersModule, AuthModule, UserRolesModule, VacanciesModule, ConfigModule.forRoot({ isGlobal: true }) ],
  controllers: [],
  providers: [],
})
export class AppModule {}
