import { UsersModule } from '../users/users.module';
import { UserFactory } from './user.factory';
import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [UserFactory],
    exports:[UserFactory]
})
export class UserRolesModule {}
