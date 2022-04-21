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
  genre: string[]

  @Prop()
  tag: string[]

  @Prop()
  listens: number;

  @Prop()
  audio: string;

  @Prop()
  picture: string;

}

export const TrackSchema = SchemaFactory.createForClass(Track);
