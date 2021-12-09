import { ApiProperty } from "@nestjs/swagger";

export class IUploadFileDto {

    @ApiProperty({
        type: 'string',
        format:'binary',
        isArray:true
    })
    image:any

}