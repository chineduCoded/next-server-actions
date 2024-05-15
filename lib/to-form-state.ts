import { FormState } from "@/schema/types"

export const toFormState = (
    status: FormState["status"],
    message: string
): FormState => {
    return {
        status,
        message,
        fieldErrors: {},
        timestamp: Date.now(),
    }
}