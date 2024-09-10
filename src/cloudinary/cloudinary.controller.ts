import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class CloudinaryController {
    constructor(private readonly cloudinaryService: CloudinaryService) {}

    @Post('image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
        return this.cloudinaryService.uploadFile(file);
    }
}
