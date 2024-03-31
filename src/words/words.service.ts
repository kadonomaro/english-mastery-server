import { Injectable, NotFoundException } from "@nestjs/common";
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

    async getAll(lessonId: string): Promise<Words[]> {
        const words = await this.wordsRepository.findBy({ lessonId });
        if (words.length === 0) throw new NotFoundException("Words not found");
        return words;
    }

    async getOne(id: string): Promise<Words> {
        return this.wordsRepository.findOneBy({ id });
    }

    async create(dto: WordsDto): Promise<Words> {
        const word = this.wordsRepository.create(dto);
        return this.wordsRepository.save(word);
    }

    async update(id: string, dto: WordsDto): Promise<Words> {
        const word = await this.wordsRepository.findOneBy({ id });
        word.name = dto.name;
        word.translate = dto.translate;
        word.lessonId = dto.lessonId;

        return this.wordsRepository.save(word);
    }

    async remove(id: string): Promise<void> {
        await this.wordsRepository.delete(id);
    }
}
