import * as Joi from '@hapi/joi';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthenticationModule } from '../authentication/core/authentication.module';
import { CategoryModule } from '../category/category.module';
import { CityModule } from '../city/city.module';
import { CountryModule } from '../country/country.module';
import { DatabaseModule } from '../database/database.module';
import { FacilityModule } from '../facility/facility.module';
import { HotelModule } from '../hotel/hotel.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { LocalFilesModule } from '../local-files/core/local-file.module';
import { ReservationModule } from '../reservation/reservation.module';
import { RoomTypeModule } from '../room-type/room-type.module';
import { RoomModule } from '../room/room.module';
import { SeedingService } from '../seedings/seeding.service';
import { Path } from '../shared/enums/path.enum';
import { UserModule } from '../users/core/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Database config module
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        // Postgresl Validation Schema
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        // ==================================
        // JWT Validation Schema
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    // Multer Module
    MulterModule.register({
      dest: Path.IMAGE_STORAGE,
    }),
    // Server Static Module
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../public'),
    }),
    // Component modules
    DatabaseModule,
    UserModule,
    AuthenticationModule,
    LocalFilesModule,
    CategoryModule,
    CityModule,
    CountryModule,
    HotelModule,
    ReservationModule,
    RoomTypeModule,
    RoomModule,
    InvoiceModule,
    FacilityModule
  ],
  // Controller
  controllers: [AppController],
  // Providers injector
  providers: [SeedingService, AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}
  async onApplicationBootstrap() {
    //await this.seedingService.seed();
    //console.log('[LOGCAT]', join(__dirname, '../../../public'));
  }
}
