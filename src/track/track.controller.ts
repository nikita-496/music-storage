import { ObjectId } from 'mongodb';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Track } from './schemas/track.shemas';
import { TrackService } from './track.service';
@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  createTrack(@Body() dto: CreateTrackDTO): Promise<Track> {
    return this.trackService.createTrack(dto);
  }
  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }
  @Get(':trackId')
  getTrackById(@Param('trackId') trackId: ObjectId): Promise<Track> {
    return this.trackService.getTrackById(trackId);
  }
}
