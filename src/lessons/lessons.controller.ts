import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { LessonsService } from "./lessons.service";
import { LessonsDto } from "./lessons.dto";

@Controller("lessons")
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Get()
    getAll() {
        return this.lessonsService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.lessonsService.getOne(id);
    }

    @Post()
    create(@Body() dto: LessonsDto) {
        return this.lessonsService.create(dto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.lessonsService.remove(id);
    }
}
