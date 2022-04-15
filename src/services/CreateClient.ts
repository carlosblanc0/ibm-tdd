import { ClientsRepository } from "../repositories/ClientsRepository";

interface CreateClientRequest {
    title: string;
    description?: string;
}

    export class CreateClient {
        constructor (
        private clientsRepository: ClientsRepository,
        ) {}

    async execute({title, description}: CreateClientRequest) {
        if (!title) {
            throw new Error("Please, make sure to include a title (client's name).")
        }

        await this.clientsRepository.create({
            title,
            description
        })
    }
}