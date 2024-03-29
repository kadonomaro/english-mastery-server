import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Words {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    translate: string;

    @Column({ name: "lesson_id", default: "" })
    lessonId: string;

    @Column({ name: "is_completed", default: false })
    isCompleted: boolean;

    // @ManyToMany(() => Lessons, (lessons) => lessons.words, {
    //     cascade: true,
    // })
    // @JoinTable()
    // lessons: Lessons[];
}
