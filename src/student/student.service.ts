import { Injectable } from '@nestjs/common';
import {
  StudentResponseDto,
  CreateStudentDto,
  CreateUserDto,
  UpdateStudentDto,
} from './dto/studemt.dto';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
  private students = students;
  getStudents(): StudentResponseDto[] {
    return this.students;
  }
  getStudentById(id: string): StudentResponseDto {
    return this.students.find((item) => {
      return item.id == id;
    });
  }
  createStudent(payload: CreateUserDto) {
    let newStudent: StudentResponseDto = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  updateStudent(payload: UpdateStudentDto, id: string) {
    let updateStudent: StudentResponseDto;
    const updateList = this.students.map((student) => {
      if (student.id == id) {
        updateStudent = { ...student, ...payload };
      }else{
          return student
      }
    });
    this.students = updateList
    return updateStudent;
  }
}
