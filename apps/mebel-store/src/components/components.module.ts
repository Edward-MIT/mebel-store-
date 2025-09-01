import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { LikeModule } from './like/like.module';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [UsersModule, PropertyModule, AuthModule, CommentsModule, LikeModule],
  providers: [UserResolver]
})
export class ComponentsModule {}
