import { Controller ,Get, Param,Delete,Put,HttpCode,Body,HttpStatus, NotFoundException  } from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/Update-user-dto';
@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Get()
    getAll(){
        return this.usersService.getAll();

    }
    @Get(':id')
    getbyid(@Param('id') id:string){
       try{ return this.usersService.getbyid(id);}
       catch(error){
        throw new NotFoundException();
       }

    }
   @Put(':id')
    Update(@Param('id')id:string,@Body()UpdateUserDto :UpdateUserDto){
        try{ return this.usersService.update(id,UpdateUserDto);}
       catch(error){
        throw new NotFoundException();
       }

    }
    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    delete(@Param('id')id:string){

        try{ return this.usersService.delete(id);}
       catch(error){
        throw new NotFoundException();
       }

    }
}
