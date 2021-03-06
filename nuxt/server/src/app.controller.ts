import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppContoller {
  constructor(private appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getUsers();
  }
}
