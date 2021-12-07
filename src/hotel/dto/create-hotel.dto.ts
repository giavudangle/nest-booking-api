import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, Max, Min } from "class-validator";
import { CategoryViewModel } from "../../category/vm/category.vm";
import { Category } from "../../category/entities/category.entity";
import { CityViewModel } from "../../city/entities/city-vm.entity";
import { City } from "../../city/entities/city.entity";

export class CreateHotelDto {
    @ApiProperty({
        example: 'Hotel Nikko Saigon'
    })
    @IsNotEmpty()
    hotelName: string

    @ApiProperty({
        example: 'Hotel Nikko Saigon cũng có trung tâm dịch vụ doanh nhân và dịch vụ trợ giúp đặc biệt. Du khách có thể tận hưởng bể sục và nhiều lựa chọn dịch vụ spa tại khách sạn'
    })
    description: string

    @ApiProperty({
        type: 'string',
        format: 'binary'
    })
    image: any

    @ApiProperty({
        example: '235 Nguyen Van Cu Street, Quận 1, TP. Hồ Chí Minh'
    })
    address: string

    @ApiPropertyOptional({
        type: () => CityViewModel,
        example: {
            id: 1,
            cityName: "Ho Chi Minh",
        }
    })
    city: CityViewModel

    @ApiPropertyOptional({
        type: () => CategoryViewModel,
        example: {
            id: 3,
            categoryName: "Luxury",
        }
    })
    category: CategoryViewModel




}
