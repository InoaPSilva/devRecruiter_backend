import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resume {

    @PrimaryGeneratedColumn()
    id: number;

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
