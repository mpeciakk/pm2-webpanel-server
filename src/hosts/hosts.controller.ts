import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard'
import { PermissionGuard } from 'src/auth/guard/permission.guard'
import { AddHostDto } from './dto/add-host.dto'
import { DeleteHostDto } from './dto/delete-host.dto'
import { HostsService } from './hosts.service'

@Controller('hosts')
export class HostsController {
    constructor(private readonly hostsService: HostsService) {}

    @UseGuards(JwtAuthGuard, PermissionGuard)
    @Get('/')
    async getAll() {
        return this.hostsService.getAll()
    }

    @UseGuards(JwtAuthGuard, PermissionGuard)
    @Get('/:name')
    async getHost(@Param('name') name: string) {
        return this.hostsService.get(name)
    }

    @UseGuards(JwtAuthGuard, PermissionGuard)
    @Get('/:name/processes')
    async getProcesses(@Param('name') name: string) {
        return this.hostsService.getProcesses(name)
    }

    @UseGuards(JwtAuthGuard, PermissionGuard)
    @Get('/:name/stats')
    async getStats(@Param('name') name: string) {
        return this.hostsService.getStats(name)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add')
    async addHost(@Body() addHostDto: AddHostDto) {
        return this.hostsService.addHost(
            addHostDto.name,
            addHostDto.url,
            addHostDto.secret,
        )
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete')
    async deleteHost(@Body() deleteHostDto: DeleteHostDto) {
        return this.hostsService.deleteHost(deleteHostDto.id)
    }
}
