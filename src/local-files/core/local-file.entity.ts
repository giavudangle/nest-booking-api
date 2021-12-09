import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { Room } from "../../room/entities/room.entity";

@Entity('local-files')
export class LocalFile {
    @PrimaryGeneratedColumn()
    public id:number;
    
    @Column()
    filename: string;

    @Column()
    path:string;

    @Column()
    mimetype:string

    @ManyToMany(() => Hotel,hotel => hotel.images,{
        cascade:false,
        eager:false
    })
    @JoinTable({
        name:'hotels-to-files',
        joinColumn:{
            name:'image_id',
        },
        inverseJoinColumn:{
            name:'hotel_id'
        }
    })
    hotels: Hotel[]

    @ManyToMany(() => Room, room => room.images,{
        eager:false,
        cascade:false
    })
    @JoinTable({
        name:'rooms-to-files',
        joinColumn:{
            name:'image_id',
        },
        inverseJoinColumn:{
            name:'room_id'
        }
    })
    rooms : Room[]
}