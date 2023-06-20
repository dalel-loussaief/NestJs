import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/DTO/user.dto';
import { User, userDocument } from 'src/Modeles/users.modeles';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel: Model<userDocument>) {}


    add(body: UserDTO){
        return this.UserModel.create(body);
    }
    findall(){
        return this.UserModel.find();
    }
    findOne(id : String){
        return this.UserModel.findOne({id:id});
    }
    Update(id: string, body: UserDTO) {
        return this.UserModel.findByIdAndUpdate(
          { _id: id },
          { $set: body },
          { new: true },
        );
      }
      Delete(id: string) {
        return this.UserModel.deleteOne({ _id: id }).exec(); 
      }
      Search(key: string) {
        const keyword = key
          ? {
              $or: [
                { fullname: { $regex: key, $options: 'i' } },
                { email: { $regex: key, $options: 'i' } },
              ],
            }
          : {};
        return this.UserModel.find(keyword);
      }
      Faker() {
        const faker = require('faker');
        for (let index = 0; index < 30; index++) {
          const fakeUser = {
            fullname: faker.person.fullName(),
            email: faker.internet.email(),
            age: 30,
            country: faker.address.city(),
          };
          this.UserModel.create(fakeUser);
        }
        return 'success';
      }
}
