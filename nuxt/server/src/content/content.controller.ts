import { ContentService } from './content.service';
import { Content } from './schemas/content.shemas';
import { CreateContentDTO } from './dto/create-content.dto';
import { ObjectId } from 'mongodb';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Controller, Get, Post, Patch, Body, Delete, Param, UseInterceptors, UploadedFiles} from '@nestjs/common';

@Controller('api/v1/content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('picture'))
  createContent(@Body() dto: CreateContentDTO, 
  @UploadedFiles() picture): Promise<Content> {
      console.log(dto)
     return this.contentService.createContent(dto, picture);
  }

  @Get()
  getContents(): Promise<Content[]> {
    return this.contentService.getContents();
  }
  @Get(':contentId')
  getContentById(@Param('contentId') contentId: ObjectId): Promise<Content> {
    return this.contentService.getContentById(contentId)
  }
  
  @Patch(':contentId')
  @UseInterceptors(FilesInterceptor('picture'))
  updateContent(
    @Param('contentId') contentId: ObjectId,
    @Body() dto: CreateContentDTO,
    @UploadedFiles() picture
  ): Promise<Content> {
    return this.contentService.updateContent(contentId, dto, picture)
  }

  @Delete(':contentId')
  deleteContent(@Param('contentId') contentId: ObjectId):
  Promise<ObjectId> {
    return this.contentService.deleteContent(contentId)
  }
}