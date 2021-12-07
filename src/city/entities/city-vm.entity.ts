import { ApiProperty } from "@nestjs/swagger";

export class CityViewModel {
    @ApiProperty()
    id : number

    @ApiProperty()
    cityName : string
}