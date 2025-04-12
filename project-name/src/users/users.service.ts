import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    allData() {
        return "first time data";
    }

    sendData() {
        return "sent data success";
    }
}
