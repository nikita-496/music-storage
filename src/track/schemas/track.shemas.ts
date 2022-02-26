import { ObjectId } from 'mongodb';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  /*@Prop()
  _id: ObjectId;*/
  
  @Prop()
  name: string;
  
  @Prop()
  artist: string;

  @Prop()
  listens: number;

}

export const TrackSchema = SchemaFactory.createForClass(Track);
