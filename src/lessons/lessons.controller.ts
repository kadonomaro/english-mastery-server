import { Controller, Get, Post, Delete, Body } from "@nestjs/common";
import { LessonsService } from "./lessons.service";

@Controller("lessons")
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Get()
    getAll() {
        return this.lessonsService.getAll();
    }

    @Post()
    create(@Body() { name, level }: { name: string; level: string }) {
        return this.lessonsService.create({ name, level });
    }

    @Delete("/:id")
    remove(@Body() id: string) {
        return this.lessonsService.remove(id);
    }
}
