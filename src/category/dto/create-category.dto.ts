import { ApiProperty } from "@nestjs/swagger";
import { Max, Min } from "class-validator";



export class CreateCategoryDto {
    @ApiProperty()

    categoryName : string


}
