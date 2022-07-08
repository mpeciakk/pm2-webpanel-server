import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service';
import { HostsModule } from './hosts/hosts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [HostsModule, AuthModule, UsersModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
