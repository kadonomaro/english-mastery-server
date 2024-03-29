import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Words } from "./words.entity";
import { WordsDto } from "./words.dto";

@Injectable()
export class WordsService {
    constructor(
        @InjectRepository(Words)
        private readonly wordsRepository: Repository<Words>,
    ) {}

    async getAll(): Promise<Words[]> {
        return await this.wordsRepository.find();
    }

    async getOne(id: string): Promise<Words[]> {
        return await this.wordsRepository.findBy({ lessonId: id });
    }

    async create(dto: WordsDto): Promise<Words> {
        const word = this.wordsRepository.create(dto);
        return this.wordsRepository.save(word);
    }

    async remove(id: string): Promise<void> {
        await this.wordsRepository.delete(id);
    }
}
