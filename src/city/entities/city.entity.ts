import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "../../country/entities/country.entity";
import { Hotel } from "../../hotel/entities/hotel.entity";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column({
        name:'city_name',
        nullable:false
    })
    cityName : string

    @ApiPropertyOptional()
    @Column({
        name:'postal_code'
    })
    postalCode? : string

    @ManyToOne(() => Country,country => country.cities)
    @ApiProperty()
    @JoinColumn({
        name:'country_id'
    })
    country: Country

    @OneToMany(() => Hotel, hotel => hotel.city,{
        lazy:true,
        cascade:['remove','update']
    })
    hotels : Hotel[]

    
}
