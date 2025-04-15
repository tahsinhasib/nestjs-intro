import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './DTO/check.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    
    //@UsePipes(ValidationPipe)
    // allData(@Body() ab:check) {
    //     return "hey";
    // }
    // @Post('send')
    // sendData(@Body() ab) {
    //     return ab;
    // }


    // for displaying data
    @Get('/all')
    allData() {
        return this.usersService.allData();
    }

    // for sending data
    @Post('/add')
    @UsePipes(ValidationPipe)
    saveData(@Body() data) {
        return this.usersService.saveData(data)
    }

    // for deleting data
    @Delete('deletebyId/:Id')
    deleteId(@Param('Id')id){
      return this.usersService.deleteId(id)
    }

    // for searching data
    @Get(':Id')
     getId(@Param('Id')id)
     {
      return this.usersService.getId(id)
     }
}
