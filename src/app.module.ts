import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import link from './config/link';
import { AppService } from './app.service';
import { AppContoller } from './app.controller';
@Module({
 imports: [MongooseModule.forRoot(link.url), TrackModule],
 controllers: [AppContoller],
 providers: [AppService],
})
export class AppModule {}
