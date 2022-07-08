import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne(username)

        if (user && user.password === password) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    async login(user: any) {
        const payload = {
            name: user.name,
            sub: user.id,
            permissions: user.permissions,
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
