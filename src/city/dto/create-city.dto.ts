import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Country } from "../../country/entities/country.entity";

export class CreateCityDto {
    @ApiProperty()
    cityName : string

    @ApiProperty()
    country : Country

    @ApiPropertyOptional()
    postalCode : string
    

}
