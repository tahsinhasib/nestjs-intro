import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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



    @Get('/all')
    allData() {
        return this.usersService.allData();
    }

    @Post('/add')
     //@UsePipes(ValidationPipe)
     saveData(@Body() data)
    {
        return this.usersService.saveData(data)
    }
}
