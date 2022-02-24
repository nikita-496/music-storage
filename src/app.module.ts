import { AppService } from './app.service';
import { AppContoller } from './app.controller';
import { Module } from '@nestjs/common';

@Module({
 controllers: [AppContoller],
 providers: [AppService],
})
export class AppModule {}
