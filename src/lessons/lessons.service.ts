import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lessons } from "./lessons.entity";

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lessons)
        private readonly lessonsRepository: Repository<Lessons>,
    ) {}

    async getAll(): Promise<Lessons[]> {
        return await this.lessonsRepository.find();
    }

    async create({ name, level }): Promise<Lessons> {
        const lesson = this.lessonsRepository.create({ name, level });
        return this.lessonsRepository.save(lesson);
    }

    async remove(id: string): Promise<void> {
        await this.lessonsRepository.delete(id);
    }
}
