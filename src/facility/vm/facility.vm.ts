import { ApiProperty } from "@nestjs/swagger";

export class FacilityViewModel {
    @ApiProperty()
    id : number

    @ApiProperty()
    facilityName : string
}