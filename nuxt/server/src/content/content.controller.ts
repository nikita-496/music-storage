import { ContentService } from './content.service';
import { Content } from './schemas/content.shemas';
import { CreateContentDTO } from './dto/create-content.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongodb';
import { Controller, Get, Post, Patch, Body, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';

@Controller('api/v1/content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  createContent(@Body() dto: CreateContentDTO, 
  @UploadedFile() picture): Promise<Content> {
    console.log(dto)
    console.log(picture)
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
  @UseInterceptors(FileInterceptor('picture'))
  updateContent(
    @Param('contentId') contentId: ObjectId,
    @Body() dto: CreateContentDTO,
    @UploadedFile() picture
  ): Promise<Content> {
    return this.contentService.updateContent(contentId, dto, picture)
  }

  @Delete(':contentId')
  deleteContent(@Param('contentId') contentId: ObjectId):
  Promise<ObjectId> {
    return this.contentService.deleteContent(contentId)
  }
}
