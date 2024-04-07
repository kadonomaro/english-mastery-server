import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lessons } from "./lessons.entity";
import { LessonsDto } from "./lessons.dto";

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lessons)
        private readonly repository: Repository<Lessons>,
    ) {}

    async findAll(): Promise<Lessons[]> {
        return await this.repository.find();
    }

    async findOne(id: string): Promise<Lessons> {
        return this.repository.findOneBy({ id });
    }

    async create(dto: LessonsDto): Promise<Lessons> {
        const lesson = this.repository.create(dto);
        return this.repository.save(lesson);
    }

    async update(id: string, dto: LessonsDto): Promise<Lessons> {
        const lesson = await this.repository.findOneBy({ id });
        lesson.name = dto.name;
        lesson.level = dto.level;

        return this.repository.save(lesson);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
