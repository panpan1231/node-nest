import { Injectable } from '@nestjs/common';
import { TeacherResponseDto, StudentResponseDto } from './dto/teacher.dto';
import { teachers, students } from '../db';

@Injectable()
export class TeacherService {
  private teacher = teachers;
  private student = students;

  getTeachers(): TeacherResponseDto[] {
    return this.teacher;
  }

  getTeacherById(id: string): TeacherResponseDto {
    return this.teacher.find((item) => item.id == id);
  }

  getStudents(id: string): StudentResponseDto[] {
    return this.student.filter((item) => item.teacher == id);
  }
}
