import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonsService } from "./lessons.service";
import { LessonsController } from "./lessons.controller";
import { Lessons } from "./lessons.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Lessons])],
    providers: [LessonsService],
    controllers: [LessonsController],
})
export class LessonsModule {}
