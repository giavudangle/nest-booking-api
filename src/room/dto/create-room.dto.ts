import { ApiProperty } from "@nestjs/swagger";
import { HotelViewModel } from "../../hotel/vm/hotel.vm";
import { RoomTypeViewModel } from "../../room-type/vm/room-type.vm";
import { RoomType } from "../../room-type/entities/room-type.entity";
import { FacilityViewModel } from "../../facility/vm/facility.vm";
import { string } from "@hapi/joi";

export class CreateRoomDto {
    @ApiProperty({

    })
    roomName : string

    @ApiProperty({

    })
    description : string

    @ApiProperty({

    })
    currentPrice : number

    @ApiProperty({

    })
    roomType : RoomTypeViewModel

    @ApiProperty({

    })
    hotel:HotelViewModel

    @ApiProperty({
        type: () => FacilityViewModel,
        isArray:true
    })
    facilities?: FacilityViewModel[]

    @ApiProperty({
        type: 'string',
        format:'binary',
        isArray:true
    })
    image:any

    
}
