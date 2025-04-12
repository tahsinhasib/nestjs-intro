import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    allData() {
        return "first time data";
    }
}
