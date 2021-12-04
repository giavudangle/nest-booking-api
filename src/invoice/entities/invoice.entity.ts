import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "../../reservation/entities/reservation.entity";
import { User } from "../../users/entities/user.entity";

@Entity('invoices')
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({
        name:'invoice_amount'
    })
    invoiceAmount : number;


    @Column({
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
        name:'ts_issued'
    })
    issuedTimeStamp : Date

    @Column({
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
        name:'ts_paid'
    })
    paidTimeStamp : Date

    
    @Column({
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
        name:'ts_canceled'
    })
    canceledTimeStamp : Date


    @ManyToOne(() => User,user => user.invoices)
    @JoinColumn({
        name:'guest_id'
    })
    guest : User


    @ManyToOne(() => Reservation, reservation => reservation.invoices)
    @JoinColumn({
        name:'reservation_id'
    })
    reservation : Reservation
}
