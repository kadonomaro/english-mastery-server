import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lessons {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    level: string;

    // @ManyToMany(() => Words, (words) => words.lessons)
    // words: Words[];
}
