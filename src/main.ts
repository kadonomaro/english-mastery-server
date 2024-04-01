import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { validationException } from "./core/exceptions";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({});
    app.setGlobalPrefix("api");
    app.useGlobalPipes(
        new ValidationPipe({
            stopAtFirstError: true,
            exceptionFactory: (errors) => validationException(errors),
        }),
    );
    await app.listen(5000);
}
bootstrap();
