import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resume {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    SoftSkill: string;

    @Column()
    HardSkill: string;

    @Column() 
    contact: string;

}
