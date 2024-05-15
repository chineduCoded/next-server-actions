"use server"

import { fromErrorToFormState } from "@/components/errors/error-to-state";
import { toFormState } from "@/lib/to-form-state";
import { createMessageSchema } from "@/schema/form-schema";
import { FormState } from "@/schema/types";
import { revalidatePath } from "next/cache";

type Message = {
    id: string;
    title: string;
    text: string;
};

let messages: Message[] = [
    {
        id: crypto.randomUUID(),
        title: "first",
        text: 'Hello, World!'
    },
    {
        id: crypto.randomUUID(),
        title: "second",
        text: 'I want to learn React Native!'
    },
    {
        id: crypto.randomUUID(),
        title: "third",
        text: 'I want to learn TypeScript!'
    },
];

export const getMessages = async (): Promise<Message[]> => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    return Promise.resolve(messages);
};

export const createMessage = async (
    formState: FormState,
    formData: FormData
) => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    try {
        const data = createMessageSchema.parse({
            title: formData.get("title"),
            text: formData.get("text")
        })


        const messageData = {
            id: crypto.randomUUID(),
            ...data,
        };

        messages.push(messageData);
    } catch (error) {
        return fromErrorToFormState(error)
    }

    revalidatePath('/');

    return toFormState("SUCCESS", "Message created successfully.")
}