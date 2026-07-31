import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('app/health')
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Get('app/ready')
  ready() {
    // Здесь можно проверить подключение к БД
    return { status: 'ready' };
  }
}
