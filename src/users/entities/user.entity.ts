import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//transfomacao das tabelas em obj
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
