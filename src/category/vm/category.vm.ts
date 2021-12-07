import { ApiProperty } from "@nestjs/swagger";

export class CategoryViewModel {
    @ApiProperty()
    id : number

    @ApiProperty()
    categoryName : string
}