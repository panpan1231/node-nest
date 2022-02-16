import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TeacherResponseDto, StudentResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService,private readonly aaa: TeacherService,) {}

  @Get()
  getTeachers(): TeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get(':id')
  getTeacherById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): TeacherResponseDto {
    return this.aaa.getTeacherById(id);
  }

  @Get(':teacherId/students')
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): StudentResponseDto[] {
    return this.teacherService.getStudents(teacherId);
  }

  //   @Put(':teacherId/students/:student')
  //   updateStudentTeacher(
  //     @Param('teacherId') teacherId: string,
  //     @Param('student') student: string,
  //     @Body() body,
  //   ): TeacherResponseDto {
  //     return 'updateStudentTeacher' + teacherId + student + JSON.stringify(body);
  //   }
}
