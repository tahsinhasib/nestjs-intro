import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './DTO/check.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('display')
    //@UsePipes(ValidationPipe)
    allData(@Body() ab:check) {
        return "hey";
    }

    @Post('send')
    sendData(@Body() ab) {
        return ab;
    }
}
