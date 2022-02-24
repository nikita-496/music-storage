import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop()
  listens: number;

  @Prop()
  commnets: string;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
