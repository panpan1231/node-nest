import {Controller,Get,Post,Put,Param,Body} from "@nestjs/common"
import {CreateStudentDto,UpdateStudentDto,StudentResponseDto} from "./dto/studemt.dto"
@Controller('students')
export class StudentController{
    @Get()
    getStudents():StudentResponseDto[]{
        return "ALL Students"
    }

    @Get(':studentId')
    getStudentById(
        @Param('studentId') studentId:string
    ):StudentResponseDto{
        console.log(studentId)
        return "Get student by id"+studentId
    }

    @Post()
    createStudent(
        @Body() body:CreateStudentDto
    ):StudentResponseDto{
        console.log(body)
        return "Create Student"+JSON.stringify(body)
    }

    @Put(':studentId')
    updateStudent(
        @Param('studentId') studentId:string,
        @Body() body:UpdateStudentDto
    ):StudentResponseDto{
        return "Update Student by id"+studentId+JSON.stringify(body)
    }
}