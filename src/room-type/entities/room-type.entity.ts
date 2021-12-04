import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "../../room/entities/room.entity";


@Entity('room-types')
export class RoomType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name:'type_name',
        //unique:true
    })
    roomTypeName : string

    @OneToMany(() => Room,room => room.roomType,{
        lazy:true,
        cascade:['remove','update']
    })
    rooms: Room[]

    


}
