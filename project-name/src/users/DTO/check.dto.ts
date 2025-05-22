import {IsNotEmpty} from 'class-validator';

export class check {
    @IsNotEmpty()
    Name: string;
    Id: number;
}