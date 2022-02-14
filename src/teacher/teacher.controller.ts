import { Controller,Get,Put,Param,Body } from '@nestjs/common';
import { json } from 'stream/consumers';
import { TeacherResponseDto} from "./dto/teacher.dto"
@Controller('teachers')
export class TeacherController {

        // @Get()
        // getTeachers():TeacherResponseDto[]{
        //     return 'All teachers'
        // }

        // @Get(':id')
        // getTeacherById(
        //     @Param('id') id:string
        // ):TeacherResponseDto{
        //     return 'getTeacherById'+id
        // }

        // @Get(':teacherId/students')
        // getStudents(
        //     @Param('teacherId') teacherId:string
        // ):TeacherResponseDto{
        //     return 'getStudents'+teacherId
        // }

        // @Put(':teacherId/students/:student')
        // updateStudentTeacher(
        //     @Param('teacherId') teacherId:string,
        //     @Param('student') student:string,
        //     @Body() body
        // ):TeacherResponseDto{
        //     return 'updateStudentTeacher'+teacherId+student+JSON.stringify(body)
        // }
}
