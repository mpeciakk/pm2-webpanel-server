import { Module } from '@nestjs/common'
import { HostsService } from './hosts.service'
import { HostsController } from './hosts.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [HttpModule],
    providers: [HostsService, PrismaService],
    controllers: [HostsController],
})
export class HostsModule {}
