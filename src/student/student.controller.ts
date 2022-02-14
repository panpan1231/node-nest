import {Controller,Get,Post,Put,Param,Body} from "@nestjs/common"
import { timingSafeEqual } from "crypto"
import {CreateStudentDto,UpdateStudentDto,StudentResponseDto} from "./dto/studemt.dto"
import {StudentService} from "./student.service"
@Controller('students')
export class StudentController{
    constructor(private readonly studentService:StudentService){

    }
    @Get()
    getStudents():StudentResponseDto[]{
        return this.studentService.getStudents()
    }

    @Get(':studentId')
    getStudentById(
        @Param('studentId') studentId:string
    ):StudentResponseDto{
        console.log(studentId)
        return this.studentService.getStudentById(studentId)
    }

    @Post()
    createStudent(
        @Body() body:CreateStudentDto
    ):StudentResponseDto{
        console.log(body)
        return this.studentService.createStudent(body)
    }

    @Put(':studentId')
    updateStudent(
        @Param('studentId') studentId:string,
        @Body() body:UpdateStudentDto
    ):StudentResponseDto{
        return this.studentService.updateStudent(body,studentId)
    }
}