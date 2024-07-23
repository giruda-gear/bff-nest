import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getOne(@GetUser() user: User) {
    return user;
  }

  @Patch()
  update(@GetUser('id') id: number, @Body() dto: EditUserDto) {
    console.log(id, dto);
    return this.userService.editUser(id, dto);
  }
}
