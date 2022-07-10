import { IsNotEmpty } from 'class-validator'

export class DeleteHostDto {
    @IsNotEmpty()
    id: number
}
