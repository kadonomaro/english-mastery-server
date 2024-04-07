import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Words } from "./words.entity";
import { WordsDto } from "./words.dto";

@Injectable()
export class WordsService {
    constructor(
        @InjectRepository(Words)
        private readonly repository: Repository<Words>,
    ) {}

    async findAll(lessonId: string): Promise<Words[]> {
        const words = await this.repository.findBy({ lessonId });
        if (words.length === 0) throw new NotFoundException("Words not found");
        return words;
    }

    async findOne(id: string): Promise<Words> {
        return this.repository.findOneBy({ id });
    }

    async create(dto: WordsDto): Promise<Words> {
        const word = this.repository.create(dto);
        return this.repository.save(word);
    }

    async update(id: string, dto: WordsDto): Promise<Words> {
        const word = await this.repository.findOneBy({ id });
        word.name = dto.name;
        word.translate = dto.translate;
        word.lessonId = dto.lessonId;

        return this.repository.save(word);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
