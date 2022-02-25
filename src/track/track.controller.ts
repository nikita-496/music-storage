import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Track } from './schemas/track.shemas';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  async createTrack(@Body() dto: CreateTrackDTO): Promise<Track> {
    return this.trackService.createTrack(dto);
  }
  @Get()
  async getTrack() {
    return this.trackService.getTrack();
  }
}
