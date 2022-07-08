import { Controller, Get, Param } from '@nestjs/common'
import { HostsService } from './hosts.service'

@Controller('hosts')
export class HostsController {
    constructor(private readonly hostsService: HostsService) {}

    @Get('/')
    async getAll() {
        return this.hostsService.getAll()
    }

    @Get('/:name')
    async getHost(@Param('name') name: string) {
        return this.hostsService.get(name)
    }

    @Get('/:name/processes')
    async getProcesses(@Param('name') name: string) {
        return this.hostsService.getProcesses(name)
    }

    @Get('/:name/stats')
    getStats(@Param('name') name: string) {
        return this.hostsService.getStats(name)
    }
}
