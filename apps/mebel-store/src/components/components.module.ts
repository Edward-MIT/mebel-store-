import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { LikeModule } from './like/like.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';


@Module({
  imports: [
    UsersModule,
    PropertyModule,
    AuthModule,
    CommentsModule,
    LikeModule,
    BoardArticleModule,
    ViewModule,
    FollowModule],
})
export class ComponentsModule {}
