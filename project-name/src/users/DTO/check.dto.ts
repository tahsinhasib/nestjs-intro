import {IsNotEmpty} from 'class-validator';

export class check {
    @IsNotEmpty()
    name: string;
}