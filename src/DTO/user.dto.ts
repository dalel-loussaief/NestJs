import { IsEmail, IsNotEmpty } from "class-validator";


export class UserDTO{
    @IsNotEmpty()
fullname :String;

@IsEmail()
email:String;
@IsNotEmpty()
age : Number;
@IsNotEmpty()
country: String;
}