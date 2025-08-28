import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchServerService {
  getHello(): string {
    return 'Salom Edward qalesan ';
  }
}
