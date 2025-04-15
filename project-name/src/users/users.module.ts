import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {
    
}
