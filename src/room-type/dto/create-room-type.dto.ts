import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomTypeDto {
    @ApiProperty({
        default:'King',
        description:'Expected values include “single”, “double”, “suite”, “queen”, “king”, etc.'
    })
    roomTypeName : string
}
