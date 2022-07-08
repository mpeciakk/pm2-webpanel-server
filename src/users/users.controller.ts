import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { RegisterUserDto } from './register-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile(@Request() req) {
        return req.user
    }

    @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        this.usersService.register(
            registerUserDto.name,
            registerUserDto.password,
            registerUserDto.permissions,
        )
    }
}
