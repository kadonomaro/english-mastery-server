import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicsService } from "./topics.service";
import { TopicsController } from "./topics.controller";
import { Topics } from "./topics.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Topics])],
    providers: [TopicsService],
    controllers: [TopicsController],
})
export class TopicsModule {}
