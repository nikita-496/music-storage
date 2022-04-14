import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop({type: String, required: true})
  title: string;
  
  @Prop({type: Array, required: true})
  text: string[];

  @Prop({type: String, required: false})
  picture: string;

}

export const ContentSchema = SchemaFactory.createForClass(Content);