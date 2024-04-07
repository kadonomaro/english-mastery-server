import { Controller, Get, Post, Delete, Body, Param, Put } from "@nestjs/common";
import { LessonsService } from "./lessons.service";
import { LessonsDto } from "./lessons.dto";

@Controller("lessons")
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Get()
    findAll() {
        return this.lessonsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.lessonsService.findOne(id);
    }

    @Post()
    create(@Body() dto: LessonsDto) {
        return this.lessonsService.create(dto);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() dto: LessonsDto) {
        return this.lessonsService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.lessonsService.remove(id);
    }
}
