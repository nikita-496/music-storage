import { Track, TrackDocument } from './schemas/track.shemas';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>){}

  private readonly track: Track;
  async createTrack(dto: CreateTrackDTO): Promise<Track> {
    /*const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;*/
    return this.trackModel.create({ ...dto, listens: 0 });
  }
  getTrack(): string {
    return 'GET ALL TRACKS';
  }
}
