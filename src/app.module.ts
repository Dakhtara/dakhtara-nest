import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectProvider } from './Provider/project.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProjectProvider],
})
export class AppModule {}
