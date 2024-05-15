import { ZodError } from "zod";


export const fromErrorToFormState = (error: unknown) => {
    if (error instanceof ZodError) {
        return {
            status: "ERROR" as const,
            message: "",
            fieldErrors: error.flatten().fieldErrors,
            timestamp: Date.now(),
        }
    } else if (error instanceof Error) {
        return {
            status: "ERROR" as const,
            message: error.message,
            fieldErrors: {},
            timestamp: Date.now(),
        }
    } else {
        return {
            status: "ERROR" as const,
            message: "Something went wrong.",
            fieldErrors: {},
            timestamp: Date.now(),
        }
    }
}
