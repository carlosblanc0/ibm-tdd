import { PrismaClient } from '@prisma/client';
import express from 'express';
import { PrismaClientsRepository } from './repositories/prisma/PrismaClientsRepository';
import { CreateClient } from './services/CreateClient';

export const app = express();

app.use(express.json());

app.post('/clients', async (request, response) => {

    const { title, description } = request.body;
    const prismaClientsRepository = new PrismaClientsRepository
    const createClient = new CreateClient(prismaClientsRepository);

    try {

        await createClient.execute({title, description});
        return response.status(201).send();

    } catch (err: any) {
        return response.status(400).json({
            error: err.message,
        })
    }

});