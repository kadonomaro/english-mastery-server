import { IsNotEmpty } from "class-validator";

export class WordsDto {
    @IsNotEmpty({ message: "Поле обязательно для заполнения" })
    name: string;

    @IsNotEmpty({ message: "Поле обязательно для заполнения" })
    translate: string;

    lessonId: string;
}
