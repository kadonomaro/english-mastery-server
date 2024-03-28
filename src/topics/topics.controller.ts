import { Controller, Get, Post, Delete, Body } from "@nestjs/common";
import { TopicsService } from "./topics.service";

@Controller("topics")
export class TopicsController {
    constructor(private readonly topicsService: TopicsService) {}

    @Get()
    getAll() {
        return this.topicsService.getAll();
    }

    @Post()
    create(@Body() { name, level }: { name: string; level: string }) {
        return this.topicsService.create({ name, level });
    }

    @Delete("/:id")
    remove(@Body() id: string) {
        return this.topicsService.remove(id);
    }
}
