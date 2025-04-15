import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Photo) private myRepo: Repository<Photo>){}

    allData() {
        //return "first time data";
        return this.myRepo.find();
    }

    saveData(data) {
        //return "sent data success";
        this.myRepo.save(data)
    }
}
