export interface CreateClientData {
    title: string;
    description?: string;
}

export interface ClientsRepository {
    create(data: CreateClientData): Promise<void>
}