import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../../city/entities/city.entity";

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn()
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    @Column({
        name:'country_name',
        nullable:false
    })
    countryName: string

    @OneToMany(() => City,city => city.country,{
        lazy:true,
        cascade:['remove','update']
    })
    cities: City[]



}
