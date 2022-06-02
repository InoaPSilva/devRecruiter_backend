import { User } from '../users/entities/user.entity';
import { Injectable } from "@nestjs/common";
import { InferSubjects } from 'nest-casl';
import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType } from '@casl/ability';

export enum Role {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete'
}

export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[Role, Subjects]>;

@Injectable()
export class UserFactory {
    defineRole(user: User){
        // User diferentiation
        const {can, cannot, build} = new AbilityBuilder(Ability as AbilityClass<AppAbility>);
        
        if(user.isAdmin){
            can(Role.Manage, User);
        } else {
            can(Role.Read, "all")
        }

        return build({ 
            detectSubjectType: (item) => 
            item.constructor as ExtractSubjectType<Subjects>,
        });

    }
}

// Chama isso dentro do controller que precisa ser limitado e o nível de usuário vai pegar 
// const role = this.userFactory.defineRole(user);

// const isAllowed = role.can(Role.Manage, user);
// if (!isAllowed) {
//   throw ForbiddenError.from(role).setMessage("role not permited").throwUnlessCan(Role.Manage, user)
// } else {
  
//   return <Response>res.status(HttpStatus.CREATED).json({ message: user });
// }
