import { Controller, Get } from '@nestjs/common';
import { BatchServerService } from './batch-server.service';

@Controller()
export class BatchServerController {
  constructor(private readonly batchServerService: BatchServerService) {}

  @Get()
  getHello(): string {
    return this.batchServerService.getHello();
  }
}
