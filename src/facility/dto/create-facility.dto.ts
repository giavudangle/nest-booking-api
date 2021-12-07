import { ApiProperty } from "@nestjs/swagger";

export class CreateFacilityDto {
    @ApiProperty({
        example:'Swimming Pool'
    })
    facilityName : string

}
