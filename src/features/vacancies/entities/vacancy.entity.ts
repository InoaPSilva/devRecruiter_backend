import { Column, PrimaryColumn } from "typeorm";

export class Vacancy {
    @PrimaryColumn()
    id:number;
    
    @Column()
    vancancyQuantity:number;

    @Column()
    desiredSkills:string[];

    @Column()
    wage:number;

    @Column()
    escolaridade:string;
}
