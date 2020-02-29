import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TorrentsController } from './torrents/torrents.controller';

@Module({
  imports: [],
  controllers: [AppController, TorrentsController],
  providers: [AppService],
})
export class AppModule {}
