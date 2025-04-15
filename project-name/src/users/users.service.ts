import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Photo) private myRepo: Repository<Photo>){}

    // for displaying data
    allData() {
        //return "first time data";
        return this.myRepo.find();
    }

    // for sending data
    saveData(data) {
        //return "sent data success";
        this.myRepo.save(data)
    }

    // for deleting data
    deleteId(id) {
        this.myRepo.delete(id)
        return "Deleted";
    }

    // for searching data
    getId(id)
    {
        return this.myRepo.findOne({where:{Id:id}})
    }
}
