import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { WordsService } from "./words.service";
import { WordsDto } from "./words.dto";

@Controller("words")
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @Get()
    findAll(@Query("lessonId") lessonId: string) {
        return this.wordsService.findAll(lessonId);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.wordsService.findOne(id);
    }

    @Post()
    create(@Body() dto: WordsDto) {
        return this.wordsService.create(dto);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() dto: WordsDto) {
        return this.wordsService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.wordsService.remove(id);
    }
}
