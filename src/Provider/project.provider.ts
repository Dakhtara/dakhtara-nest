import { Injectable } from "@nestjs/common";
import { Project } from "src/Dto/Project.type";

@Injectable()
export class ProjectProvider {

    getAllProjects(): Project[] {
        return [
            {
                id: 1,
                name: 'Project 1',
                description: 'Project 1 description',
                startDate: new Date(),
                endDate: new Date()
            }
        ];
    }
}