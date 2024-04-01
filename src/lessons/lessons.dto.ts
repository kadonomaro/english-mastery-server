import { IsNotEmpty } from "class-validator";

export class LessonsDto {
    @IsNotEmpty({ message: "Поле обязательно для заполнения" })
    name: string;

    @IsNotEmpty({ message: "Поле обязательно для заполнения" })
    level: string;
}
