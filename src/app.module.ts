import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LessonsModule } from "./lessons/lessons.module";
import { Lessons } from "./lessons/lessons.entity";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: "english_mastery",
            entities: [Lessons],
            synchronize: true,
        }),
        LessonsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
