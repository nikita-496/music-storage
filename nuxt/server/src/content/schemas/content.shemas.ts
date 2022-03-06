import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop()
  title: string;
  
  @Prop()
  text: string[];

  @Prop()
  picture: string;

}

export const ContentSchema = SchemaFactory.createForClass(Content);
