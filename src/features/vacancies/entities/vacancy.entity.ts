import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Vacancy {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    vancancyQuantity:number;

    @Column()
    desiredSkills:string;

    @Column()
    wage:number;

    @Column()
    escolaridade:string;
}
