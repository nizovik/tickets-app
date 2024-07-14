// src/app.module.ts

import { Module } from '@nestjs/common';
import { OtherModule } from './events/other.module';


@Module({
  imports: [OtherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
