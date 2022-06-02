import { UserFactory } from './user.factory';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [UserFactory],
    exports:[UserFactory]
})
export class UserRolesModule {}
