import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateTrackDTO } from './dto/update-track.dto';
import { ObjectId } from 'mongodb';
import { Controller, Get, Post, Body, Query, Param, Patch, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Track } from './schemas/track.shemas';
import { TrackService } from './track.service';
@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'audio', maxCount: 1 },
    { name: 'picture', maxCount: 1 },
  ]))
  async createTrack( @UploadedFiles() files, @Body() dto: CreateTrackDTO): Promise<Track> {
    const { audio, picture } = files
    return this.trackService.createTrack(dto, audio[0], picture[0]);
  }

  @Get()
  getTracks(@Query('count') count: number, @Query('offset') offset: number): Promise<Track[]> {
    return this.trackService.getTracks(count, offset);
  }
  @Get(':trackId')
  getTrackById(@Param('trackId') trackId: ObjectId): Promise<Track> {
    return this.trackService.getTrackById(trackId);
  }

  @Patch(':trackId')
  updateTrack(@Param('trackId') trackId: ObjectId, @Body() dto: UpdateTrackDTO): Promise<Track> {
    return this.trackService.updateTrack(trackId, dto);
  }

  @Delete(':trackId')
  deleteTrack(@Param('trackId') trackId: ObjectId): Promise<ObjectId> {
    return this.trackService.deleteTrack(trackId);
  }

  @Post('/listen/:trackId')
  listen(@Param('trackId') trackId: ObjectId) {
    return this.trackService.listen(trackId);
  }
}
