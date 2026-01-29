import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UpdateUserDto } from './dto/Update-user-dto';

@Injectable()
export class UsersService {
    Users=[
        {
            id: '1',
            name:"eya",
            age: 21
        },
         {
            id: '2',
            name:"Isra",
            age: 21
        },
         {
            id: '3',
            name:"Imen",
            age: 19
        }
    ]
    getAll(){
        return this.Users;
    }
    getbyid(id:string){
        const user=this.Users.find((user)=>user.id===id);
        if (!user){
            throw new Error()
        }
        else{
            return user;
        }
    }
    update(id:string , UpdatedUser:UpdateUserDto){
        const user=this.Users.find((user)=>user.id===id);
        if (!user){
            throw new Error()
        }
        else{
            user.name=UpdatedUser.name,
            user.age=UpdatedUser.age
            return UpdatedUser;
        }
        
    }
    delete(id:string){
        const userIndex=this.Users.findIndex((user)=>user.id===id);
        if (userIndex==-1){
            throw new Error()
        }
        else{
            return this.Users.splice(userIndex,1);

    }}
}
