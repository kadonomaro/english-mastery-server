import { BadRequestException, ValidationError } from "@nestjs/common";

export const validationException = (errors: ValidationError[] = []) => {
    return new BadRequestException(
        errors.map((error) => ({
            field: error.property,
            error: Object.values(error.constraints).join(", "),
        })),
    );
};
