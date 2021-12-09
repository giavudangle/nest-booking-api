import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { Room } from "../../room/entities/room.entity";

@Entity('facilities')
export class Facility {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        name:'facility_name'
    })
    @ApiProperty()
    facilityName : string

    @ManyToMany(() => Hotel,hotel => hotel.facilities,{
        cascade:true,
        lazy:true,
    })
    @JoinTable({
        name:'facilities-to-hotels',
        joinColumn:{
            name:'faclitiy_id'
        },
        inverseJoinColumn:{
            name:'hotel_id'
        }
        
    })
    hotels : Hotel[]

    @ManyToMany(() => Room,room => room.facilities,{
        cascade:true,
        eager:false,
    })
    @JoinTable({
        name:'facilities-to-rooms',
        joinColumn:{
            name:'faclitiy_id'
        },
        inverseJoinColumn:{
            name:'room_id'
        }
        
    })
    rooms : Room[]
}