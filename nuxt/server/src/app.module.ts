import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import link from './config/link'
import { AppService } from './app.service';
import { AppContoller } from './app.controller';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
 imports: [
  ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
  MongooseModule.forRoot(link.url), 
  TrackModule, 
  FileModule,
],
 controllers: [AppContoller],
 providers: [AppService],
})
export class AppModule {}
