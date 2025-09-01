import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel("Users") private readonly userModel: Model<null>){}

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
