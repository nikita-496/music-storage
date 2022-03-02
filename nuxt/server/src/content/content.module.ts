import { Content, ContentSchema } from './schemas/content.shemas';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { FileService } from '../file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]),
  ],
  controllers: [ContentController],
  providers: [ContentService, FileService],
})
export class ContentModule {}