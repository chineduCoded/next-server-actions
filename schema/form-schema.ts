import { z } from 'zod';

export const createMessageSchema = z.object({
    title: z.string().min(1).max(100),
    text: z.string().min(1).max(200),
})