import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProjectProvider } from './Provider/project.provider';
import { Project } from './Dto/Project.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly projectProvider: ProjectProvider) {}

  @Get()
  getHello(): {message: string} {
    return this.appService.getHello();
  }

  @Get('projects')
  getProjects(): Project[] {
    return this.projectProvider.getAllProjects();
  }
}
