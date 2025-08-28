import { Module } from '@nestjs/common';
import { BatchServerController } from './batch-server.controller';
import { BatchServerService } from './batch-server.service';

@Module({
  imports: [],
  controllers: [BatchServerController],
  providers: [BatchServerService],
})
export class BatchServerModule {}
