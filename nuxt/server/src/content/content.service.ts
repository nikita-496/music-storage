import { CreateContentDTO } from './dto/create-content.dto';
import { Content, ContentDocument } from './schemas/content.shemas';
import { FileService, FileType } from './../file/file.service';
import { ObjectId } from 'mongodb';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
    private fileService: FileService,
  ){}

  private readonly content: Content;

  async createContent(dto: CreateContentDTO, picture): Promise<Content> {
    const picturePath = this.fileService.createFile(FileType.IMAGE,picture)
    return this.contentModel.create({...dto, picture: picturePath})
  }

  async getContents(): Promise<Content[]> {
    return await this.contentModel.find();
  }

  /*async updateContent(): Promise<Content> {
    return await this.contentModel.findOneAndUpdate();
  } 

  async deleteContent(trackId: ObjectId): Promise<ObjectId> {
    return (await this.contentModel.findByIdAndDelete(trackId))._id;
  } */
}