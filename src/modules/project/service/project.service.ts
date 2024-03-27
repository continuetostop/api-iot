import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { ProjectRepository } from '../repository/project.repository';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: ProjectRepository,
  ) {}
  async create(createProjectDto: CreateProjectDto, userReq: IPayloadToken) {
    const data: CreateProjectDto = Object.assign(createProjectDto, {
      createdById: userReq.sub,
    });
    return this.projectRepo.save(data);
  }

  async findAll() {
    return this.projectRepo.find();
  }

  async findOne(id: string) {
    return this.projectRepo.findOne({ where: { id: id } });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectRepo.findOne({ where: { id } });
    const data = Object.assign(project, updateProjectDto);
    return this.projectRepo.update(id, data);
  }

  async remove(id: string) {
    const project = await this.projectRepo.findOne({ where: { id } });

    return this.projectRepo.remove(project);
  }
}
