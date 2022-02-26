import { UpdateTrackDTO } from './dto/update-track.dto';
import { ObjectId } from 'mongodb';
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
  async getTracks(): Promise<Track[]> {
    return await this.trackModel.find();
  }

  async getTrackById(trackId: ObjectId): Promise<Track> {
    return await this.trackModel.findById(trackId);
  }

  async updateTrack(trackId: ObjectId, dto: UpdateTrackDTO): Promise<Track> {
    return await this.trackModel.findOneAndUpdate({ trackId }, dto);
  } 

  async deleteTrack(trackId: ObjectId): Promise<ObjectId> {
    return (await this.trackModel.findByIdAndDelete(trackId))._id;
  } 
}