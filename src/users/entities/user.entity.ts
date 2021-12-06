import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '../../invoice/entities/invoice.entity';
import { LocalFile } from '../../local-files/core/local-file.entity';
import { Reservation } from '../../reservation/entities/reservation.entity';

interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
}

@Entity('users')
export class User implements IUser {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column({ unique: true })
  public email: string;

  @ApiProperty()
  @Column()
  public name: string;

  @Column({nullable:true})
  @ApiPropertyOptional()
  public phoneNumber?: string;

  @Column({nullable:true})
  @ApiPropertyOptional()
  public address?: string;
  
  @JoinColumn({name:'avatar_id'})
  @OneToOne(
    () => LocalFile,
    {
      nullable:true
    }
  )
  public avatar?:LocalFile

  @Column({ nullable: true,name:'avatar_id' })
  public avatarId?: number;


  @Column({
    name:'avatar_img_url',
    nullable:true
  })
  avatarImageUrl : string

  @ApiProperty()
  @Exclude()
  @Column()
  public password: string;

  @Exclude()
  @Column({
    nullable:true
  })
  public currentHashedRefreshToken?:string

  @OneToMany(() => Reservation,reservation => reservation.guest,{
    cascade:true
  })
  @ApiProperty()
  reservations : Reservation[]

  @OneToMany(() => Invoice,invoice => invoice.guest,{
    cascade:true,
    eager:true
  })
  @ApiProperty()
  invoices : Invoice[]

}
