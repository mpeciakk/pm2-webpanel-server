import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { HostsModule } from './hosts/hosts.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
    imports: [HostsModule, AuthModule, UsersModule],
    providers: [PrismaService],
})
export class AppModule {}
