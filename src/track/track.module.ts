import { FileService } from './../file/file.service';
import { Track, TrackSchema } from './schemas/track.shemas';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}