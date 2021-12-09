import { Injectable, mixin, NestInterceptor, Type } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { MulterField, MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { editFileName } from "../utils/file-uploading.utils";

interface IMultipleUploadFileInterceptor {
    fieldName?: string;
    path?:string;
    limits: MulterOptions['limits'],
    fileFilter?:MulterOptions['fileFilter'];
    fileName?: any
    
}

export function MultipleUploadFileInterceptor(uploadFields : MulterField[],options : IMultipleUploadFileInterceptor) : Type<NestInterceptor>{
    @Injectable()
    class Interceptor implements NestInterceptor {
        multipleUploadInterceptor: NestInterceptor;
        constructor(configService : ConfigService){
            const multerOptions : MulterOptions = {
                storage:diskStorage({
                    destination:configService.get('UPLOADED_FILES_DESTINATION'),
                    filename:options.fileName
                }),
                fileFilter:options.fileFilter,
                limits:options.limits
            }
            this.multipleUploadInterceptor = new (FileFieldsInterceptor(uploadFields,multerOptions))
        }
        intercept(...args:Parameters<NestInterceptor['intercept']>){
            
            return this.multipleUploadInterceptor.intercept(...args)
        }
    }
    return mixin(Interceptor)
}

