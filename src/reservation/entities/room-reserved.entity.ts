import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "../../reservation/entities/reservation.entity";
import { Room } from "../../room/entities/room.entity";


@ApiTags('Room Reserved API')
@Entity('rooms-to-reverseds')
export class RoomReserved {
    @PrimaryGeneratedColumn()
    id : number

    @ApiProperty()
    @ManyToOne(() => Room,room => room.reservations)
    @JoinColumn({
        name:'room_id'
    })
    room : Room
    
    @ApiProperty()
    @ManyToOne(() => Reservation,reservation => reservation.rooms)
    @JoinColumn({
        name:'reservation_id'
    })
    reservation : Reservation

    @ApiProperty()
    @Column()
    price : number

}
