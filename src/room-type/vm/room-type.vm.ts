import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "../../room/entities/room.entity";


export class RoomTypeViewModel {
    @ApiProperty()
    id: number;

    @ApiProperty()
    roomTypeName : string
}
