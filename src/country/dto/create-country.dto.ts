import { ApiProperty } from "@nestjs/swagger";

export class CreateCountryDto {
    @ApiProperty()
    countryName : string
}
