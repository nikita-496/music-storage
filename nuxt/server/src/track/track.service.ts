import { FileService, FileType } from './../file/file.service';
import { UpdateTrackDTO } from './dto/update-track.dto';
import { ObjectId } from 'mongodb';
import { Track, TrackDocument } from './schemas/track.shemas';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    private fileService: FileService
  ) {}

  private readonly track: Track;
  async createTrack(dto: CreateTrackDTO, audio, picture): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath
    });
  }
  async getTracks(count = 10, offset = 0): Promise<Track[]> {
    return await this.trackModel.find().skip(offset).limit(count);
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

  async listen(trackId: ObjectId) {
    const track = await this.trackModel.findById(trackId);
    track.listens++;
    track.save();
  }
}
