import { Resume } from './../../resume/entities/resume.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn } from "typeorm";
import { hashSync } from "bcrypt";
import { IsEmail } from "class-validator";
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

  @OneToOne(() => Resume, Resume => Resume.id, {onDelete: 'CASCADE'})
  @JoinColumn()
  resume: Resume;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
