import { Module } from '@nestjs/common';
import { BatchServerController } from './batch-server.controller';
import { BatchServerService } from './batch-server.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BatchServerController],
  providers: [BatchServerService],
})
export class BatchServerModule {}
