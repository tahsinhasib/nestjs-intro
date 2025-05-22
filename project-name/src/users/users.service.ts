import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    async create(name: string): Promise<User> {
        const user = this.userRepo.create({ Name: name });
        return await this.userRepo.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userRepo.findOne({ where: { Id: id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async update(id: number, name: string): Promise<User> {
        const user = await this.findOne(id);
        user.Name = name;
        return await this.userRepo.save(user);
    }

    async delete(id: number): Promise<string> {
        const result = await this.userRepo.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return `User with ID ${id} deleted`;
    }
}
