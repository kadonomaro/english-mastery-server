import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Topics } from "./topics.entity";

@Injectable()
export class TopicsService {
    constructor(
        @InjectRepository(Topics)
        private readonly topicsRepository: Repository<Topics>,
    ) {}

    async getAll(): Promise<Topics[]> {
        return await this.topicsRepository.find();
    }

    async create({ name, level }): Promise<Topics> {
        const topic = this.topicsRepository.create({ name, level });
        return this.topicsRepository.save(topic);
    }

    async remove(id: string): Promise<void> {
        await this.topicsRepository.delete(id);
    }
}
