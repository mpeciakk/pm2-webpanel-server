import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service';
import { HostsModule } from './hosts/hosts.module';

@Module({
    imports: [HostsModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
