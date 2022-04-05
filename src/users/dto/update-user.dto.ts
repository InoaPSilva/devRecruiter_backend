import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//apenas atualizar os dados do createDTO
export class UpdateUserDto extends PartialType(CreateUserDto) {}
