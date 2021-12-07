import { ApiProperty } from "@nestjs/swagger"

export class HotelViewModel {
    @ApiProperty()
    id:number


    @ApiProperty()
    hotelName:string

    @ApiProperty()
    imageUrl : string

    @ApiProperty()
    address: string

    @ApiProperty()
    description:string

    @ApiProperty()
    isActive : boolean
}