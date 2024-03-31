import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lessons } from "./lessons.entity";
import { LessonsDto } from "./lessons.dto";

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lessons)
        private readonly lessonsRepository: Repository<Lessons>,
    ) {}

    async getAll(): Promise<Lessons[]> {
        return await this.lessonsRepository.find();
    }

    async getOne(id: string): Promise<Lessons> {
        return this.lessonsRepository.findOneBy({ id });
    }

    async create(dto: LessonsDto): Promise<Lessons> {
        const lesson = this.lessonsRepository.create(dto);
        return this.lessonsRepository.save(lesson);
    }

    async update(id: string, dto: LessonsDto): Promise<Lessons> {
        const lesson = await this.lessonsRepository.findOneBy({ id });
        lesson.name = dto.name;
        lesson.level = dto.level;

        return this.lessonsRepository.save(lesson);
    }

    async remove(id: string): Promise<void> {
        await this.lessonsRepository.delete(id);
    }
}
