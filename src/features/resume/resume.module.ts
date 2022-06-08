import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { DatabaseModule } from 'src/config/database.module';
import { resumeProviders } from './entities/resume.provider';

@Module({ 
  imports: [DatabaseModule],
  controllers: [ResumeController],
  providers: [...resumeProviders ,ResumeService],
  export: [ResumeService]
})
export class ResumeModule {}
