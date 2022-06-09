import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hashSync } from 'bcrypt';
import { IsEmail } from 'class-validator';
//transfomacao das tabelas em obj
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isAdmin: boolean;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
