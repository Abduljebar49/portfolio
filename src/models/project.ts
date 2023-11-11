import { Client } from "./client";

export interface Project {
    images: string[],
    title: string,
    type: string,
    stack: string[],
    id: number,
    client: Client,
    objective?: string,
    doneAt?: Date,
    challenges: string,
}