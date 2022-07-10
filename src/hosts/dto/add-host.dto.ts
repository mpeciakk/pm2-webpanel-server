import { IsNotEmpty } from 'class-validator'

export class AddHostDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    url: string

    @IsNotEmpty()
    secret: string
}
