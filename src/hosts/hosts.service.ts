import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { HostStatistics } from './interfaces/host-statistics.interface'
import { Process } from './interfaces/process.interface'
import { RawProcess } from './interfaces/raw-process.interface'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class HostsService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService,
    ) {}

    private parseProcess(data: RawProcess) {
        return {
            name: data.name,
            id: data.pm2_env.pm_id,
            pid: data.pid,
            status: data.pm2_env.status,
            cpu: data.monit.cpu,
            memory: data.monit.memory,
        }
    }

    async getAll() {
        return this.prisma.host.findMany()
    }

    async get(name: string) {
        return this.prisma.host.findFirst({ where: { name: name } })
    }

    async getProcesses(name: string) {
        const processes = [] as Process[]

        const host = await this.get(name)

        if (host) {
            // TODO: it shouldn't use axiosRef
            const response = await this.httpService.axiosRef.get(host.url, {
                headers: {
                    authorization: `Bearer ${host.secret}`,
                },
            })

            const data = response.data as RawProcess[]

            for (const process of data) {
                processes.push(this.parseProcess(process))
            }
        }

        return processes
    }

    async getStats(name: string) {
        const host = await this.get(name)

        const response = await this.httpService.axiosRef.get(
            `${host.url}stats`,
            {
                headers: {
                    authorization: `Bearer ${host.secret}`,
                },
            },
        )

        return response.data as HostStatistics
    }

    async deleteHost(id: number) {
        this.prisma.host
            .delete({
                where: {
                    id,
                },
            })
            .catch(console.error)
    }

    async addHost(name: string, url: string, secret: string) {
        this.prisma.host
            .create({
                data: {
                    name,
                    url,
                    secret,
                },
            })
            .then((host) => console.log(host))
    }
}
