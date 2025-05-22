import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './DTO/check.dto';
import { CreateUserDto } from './DTO/create-user.dto';

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

    @UsePipes(new ValidationPipe())
    @Post('add')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto.Name);
    }

    @UsePipes(new ValidationPipe())
    @Get('all')
    findAll() {
        return this.usersService.findAll();
    }

    @UsePipes(new ValidationPipe())
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }
}
