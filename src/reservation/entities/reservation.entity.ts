import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { RoomReserved } from "../../room-reserved/entities/room-reserved.entity";
import { Room } from "../../room/entities/room.entity";
import { User } from "../../users/entities/user.entity";


@Entity('reservations')
export class Reservation {
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type:'timestamptz',
        name:'start_date'
    })
    startDate : Date

    @ApiProperty()
    @Column({
        type:'timestamptz',
        name:'end_date'
    })
    endDate : Date

    @CreateDateColumn({
        name:'created_at'
    })
    createdAt : Date

    @UpdateDateColumn({
        name:'updated_at'
    })
    updatedAt : Date

    @ApiPropertyOptional()
    @Column({
        name:'discount_percent'
    })
    discountPercent : number

    @Column({
        name:'total_price'
    })
    totalPrice : number
    

    @ManyToOne(() => User,user => user.reservations)
    @JoinColumn({
        name:'guest_id'
    })
    guest : User

    // Note here
    @OneToMany(() => RoomReserved,roomReversed => roomReversed.reservation)
    rooms : RoomReserved[]


}
