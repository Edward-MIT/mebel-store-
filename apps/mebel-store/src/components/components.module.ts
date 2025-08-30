import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [UsersModule, PropertyModule]
})
export class ComponentsModule {}
