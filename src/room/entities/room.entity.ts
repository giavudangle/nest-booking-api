import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { RoomReserved } from "../../reservation/entities/room-reserved.entity";
import { RoomType } from "../../room-type/entities/room-type.entity";



@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id : number

    @Column({
        name:'room_name'
    })
    roomName: string

    @Column({
        name:'description'
    })
    @ApiProperty()
    roomDescription : string

    @Column({
        name:'current_price'
    })
    currentPrice : number

    @ManyToOne(() => RoomType,roomType => roomType.rooms)
    @JoinColumn({
        name:'room_type_id'
    })
    roomType : RoomType

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({
        name:'hotel_id'
    })
    hotel : Hotel

    @OneToMany(() => RoomReserved,roomReversed => roomReversed.room,{
        eager:false,
        cascade:true
    })
    reservations : RoomReserved[]
}
