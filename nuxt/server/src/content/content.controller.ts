import { ContentService } from './content.service';
import { Content } from './schemas/content.shemas';
import { CreateContentDTO } from './dto/create-content.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongodb';
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, } from '@nestjs/common';

@Controller('contents')
export class ContentController {
  constructor(private contentService: ContentService) {}

  /*@Post()
  @UseInterceptors(FileInterceptor('image'))
  async createContent( @UploadedFile() file, @Body() dto: CreateContentDTO): Promise<Content> {
    console.log('file '+ file)
    const picture = {
    	originalname: file.originalname,
    	filename: file.filename,
    };
    return this.contentService.createContent(dto, '');
  }*/

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
  ]))
  async createContent( @UploadedFile() files, @Body() dto: CreateContentDTO): Promise<Content> {
    //console.log('files '+ files)
    return this.contentService.createContent(dto, '');
  }

  @Get()
  getContents(): Promise<Content[]> {
    return this.contentService.getContents();
  }
  /*@Get(':trackId')
  getTrackById(@Param('trackId') trackId: ObjectId): Promise<Track> {
    return this.trackService.getTrackById(trackId);
  }*/

 /* @Patch(':trackId')
  updateContent(@Param('trackId') trackId: ObjectId, @Body() dto: UpdateTrackDTO): Promise<Track> {
    return this.trackService.updateTrack(trackId, dto);
  }

  @Delete(':trackId')
  deleteContent(@Param('trackId') trackId: ObjectId): Promise<ObjectId> {
    return this.trackService.deleteTrack(trackId);
  }*/

}
