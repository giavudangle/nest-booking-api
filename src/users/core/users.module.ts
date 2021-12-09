import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { LocalFilesService } from '../../local-files/core/local-file.service';
import { LocalFile } from '../../local-files/core/local-file.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User,LocalFile,])],
  controllers: [UserController],
  providers: [UserService,ConfigService,LocalFilesService,],
  exports: [UserService],
})
export class UserModule {}
