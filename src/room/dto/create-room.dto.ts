import { ApiProperty } from "@nestjs/swagger";
import { HotelViewModel } from "../../hotel/vm/hotel.vm";
import { RoomTypeViewModel } from "../../room-type/vm/room-type.vm";
import { RoomType } from "../../room-type/entities/room-type.entity";
import { FacilityViewModel } from "../../facility/vm/facility.vm";
import { string } from "@hapi/joi";

export class CreateRoomDto {
    @ApiProperty({
        example:'Deluxe Double Room'
    })
    roomName : string

    @ApiProperty({
        example:'This spacious room features free Wi-Fi, a large flat-screen TV, ample bath area and city views from over-sized windows.'
    })
    roomDescription : string

    @ApiProperty({
        example:200
    })
    currentPrice : number

    @ApiProperty({
        type: () => RoomTypeViewModel,
        example: {
            id: 9,
            roomTypeName:'King'
        }
    })
    roomType : RoomTypeViewModel

    @ApiProperty({
        type: () => HotelViewModel,
        example:{
            id: 2,
            hotelName: "Hotel Nikko Saigon",
            imageUrl: `public\\assets\\images\\244689818_2890622494582274_3626192853862023410_n-5def.jpg`,
            address: "235 Nguyen Van Cu Street, Quận 1, TP. Hồ Chí Minh",
            description: "Hotel Nikko Saigon cũng có trung tâm dịch vụ doanh nhân và dịch vụ trợ giúp đặc biệt. Du khách có thể tận hưởng bể sục và nhiều lựa chọn dịch vụ spa tại khách sạn",
            isActive: true
        }
    })
    hotel:HotelViewModel

    @ApiProperty({
        type: () => FacilityViewModel,
        isArray:true,
        example:[
            {
                id :1,
                facilityName: 'Swimming Pool'
            },
            {
                id :2,
                facilityName: 'Airport shuttle'
            }
        ]
    })
    facilities?: FacilityViewModel[]


    
}
