import { CreateClient } from "./CreateClient";

test('Create client', async () => {
    const createClient = new CreateClient({
        create: async (data) => {}
    });

    await expect(createClient.execute({title: "RedHat"})).resolves.not.toThrow()
})

test('Create null/invalid client', async () => {
    const createClient = new CreateClient({
        create: async (data) => {}
    });

    await expect(createClient.execute({title: " "})).resolves.toThrow()
})