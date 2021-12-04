import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { City } from "../../city/entities/city.entity";
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
        name:'description'
    })
    description:string

    @Column({
        name:'is_active'
    })
    isActive : boolean

    @ManyToOne(() => City,city => city.hotels)
    @JoinColumn({
        name:'city_id'
    })
    city : City
    
    @OneToMany(() => Room,room => room.hotel,{
        cascade:['remove','update'],
        eager:true
    })
    rooms : Room[]

    @ManyToOne(() => Category,category => category.hotels)
    @JoinColumn({
        name:'category_id'
    })
    category : Category




}
