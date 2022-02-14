import { Module } from '@nestjs/common';
import {StudentController } from "../student/student.controller"
import {TeacherController } from "../teacher/teacher.controller"
import {StudentService}  from "../student/student.service"

@Module({
  imports: [],
  controllers:[StudentController,TeacherController],
  providers:[StudentService]
})
export class AppModule {}
