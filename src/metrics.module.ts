import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.comtroller';
import { collectDefaultMetrics } from 'prom-client';

@Module({
  controllers: [MetricsController],
  providers: [],
})
export class MetricsModule {
  constructor() {
    collectDefaultMetrics();
  }
}
