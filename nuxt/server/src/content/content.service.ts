import { ObjectId } from 'mongodb';
import { CreateContentDTO } from './dto/create-content.dto';
import { Content, ContentDocument } from './schemas/content.shemas';
import { FileService, FileType } from '../file/file.service';
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
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
    return this.contentModel.create({...dto, picture: picturePath})
  }

  async getContents(): Promise<Content[]> {
    return await this.contentModel.find();
  }

  async getContentById(contentId: ObjectId): Promise<Content> {
    return await this.contentModel.findById(contentId);
  }

  async updateContent(contentId: ObjectId, dto: CreateContentDTO, picture): Promise<Content> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return await this.contentModel.findOneAndUpdate({ contentId }, {...dto, picture: picturePath}, {
      returnOriginal: false
    });
  }

  async deleteContent(contentId: ObjectId): Promise<ObjectId> {
    return (await this.contentModel.findByIdAndDelete(contentId))._id;
  }
}