import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { City } from "../../city/entities/city.entity";
import { Facility } from "../../facility/entities/facility.entity";
import { Room } from "../../room/entities/room.entity";

@Entity('hotels')
export class Hotel {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        name:'hotel_name'
    })
    @ApiProperty()
    hotelName:string

    @Column({
        name:'image_url'
    })
    imageUrl : string

    @Column()
    address: string

    @Column({
        name:'description'
    })
    description:string

    @Column({
        name:'is_active',
        default: false
    })
    isActive : boolean

    @ManyToOne(() => City,city => city.hotels)
    @JoinColumn({
        name:'city_id'
    })
    city : City

    @ManyToOne(() => Category,category => category.hotels)
    @JoinColumn({
        name:'category_id'
    })
    category : Category

    @OneToMany(() => Room,room => room.hotel,{
        cascade:['remove','update'],
        eager:true
    })
    rooms : Room[]

    @ManyToMany(() => Facility,facility => facility.hotels)
    facilities : Facility[]




}
