import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { WordsService } from "./words.service";
import { WordsDto } from "./words.dto";

@Controller("words")
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @Get()
    getAll() {
        return this.wordsService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.wordsService.getOne(id);
    }

    @Post()
    create(@Body() dto: WordsDto) {
        return this.wordsService.create(dto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.wordsService.remove(id);
    }
}
