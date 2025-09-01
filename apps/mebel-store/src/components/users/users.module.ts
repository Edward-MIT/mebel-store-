import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from '../../libs/schemas/User.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name: "Users", schema:UserSchema}])
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
