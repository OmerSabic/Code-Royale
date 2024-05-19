export interface Contact {
    id: string;
    first: string;
    last: string;
    favorite: boolean;
    // Add other properties as needed
}

export async function getContacts(): Promise<Contact[]> {
    // Example data
    const contacts: Contact[] = [
        {
            id: "1",
            first: "John",
            last: "Doe",
            favorite: true,
        },
        {
            id: "2",
            first: "Jane",
            last: "Doe",
            favorite: false,
        },
    ];
    return contacts;
}