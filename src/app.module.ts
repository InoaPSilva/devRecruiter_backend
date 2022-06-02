import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';
import { UserRolesModule } from './features/user-roles/user-roles.module';

@Module({
  imports: [UsersModule, AuthModule, UserRolesModule, ConfigModule.forRoot({ isGlobal: true }), ],
  controllers: [],
  providers: [],
})
export class AppModule {}
