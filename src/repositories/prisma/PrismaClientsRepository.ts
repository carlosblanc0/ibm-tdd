import { prisma } from "../../prisma";
import { CreateClientData, ClientsRepository } from "../ClientsRepository";

export class PrismaClientsRepository implements ClientsRepository {
    async create(data: CreateClientData) {
        await prisma.clients.create({
            data
        })
    }
}