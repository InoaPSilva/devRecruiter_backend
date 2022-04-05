import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//transfomacao das tabelas em obj
@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    password: String;

}
