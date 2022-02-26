import { ObjectId } from 'mongodb';
import { Track, TrackDocument } from './schemas/track.shemas';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>){}

  async createTrack(dto: CreateTrackDTO): Promise<Track> {
    return this.trackModel.create({ ...dto, listens: 0 });
  }
  async getTracks(): Promise<Track[]> {
    return this.trackModel.find();
  }

  async getTrackById(trackId: ObjectId): Promise<Track> {
    return this.trackModel.findById(trackId);
  }
}
