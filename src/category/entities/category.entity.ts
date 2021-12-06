import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotel/entities/hotel.entity";


@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id : number;

    @ApiProperty()
    @Column({
        unique:true ,
        name:'category_name' 
    })
    categoryName : string

    @ApiProperty()
    @OneToMany(() => Hotel,hotel => hotel.category,{
        cascade:['remove','update'],
        eager:true
    }) 
    hotels: Hotel[]

}
