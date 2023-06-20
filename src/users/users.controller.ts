import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/DTO/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service:UsersService){};
    @Post()
    add(@Body() body : UserDTO){
        return this.service.add(body);
    }
    @Get()
    FindAll(){
        return this.service.findall();
    }
    @Get('/:id')
    FindOne(@Param('id') id:string){
        return this.service.findOne(id);
    }
    @Put('/:id')
    Update(@Param('id') id: string, @Body() body: UserDTO) {
      return this.service.Update(id, body);
    }
    @Delete('/:id')
    Delete(@Param('id') id: string) {
      return this.service.Delete(id);
    }
    @Post('/search')
  Search(@Query('key') key) {
    return this.service.Search(key);
  }
  @Post('faker')
  Faker() {
    return this.service.Faker();
  }
}
