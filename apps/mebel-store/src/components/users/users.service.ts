import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  public async signup (): Promise<string>{
    return 'signup executed'
  }

  public async login(): Promise<string>{
    return 'login executed'
  }

  public async getUser(): Promise<string>{
    return "getUser API executed!"
  }
}
