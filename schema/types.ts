export type FormState = {
    status: "UNSET" | "SUCCESS" | "ERROR";
    message: string;
    fieldErrors: Record<string, string[] | undefined>;
    timestamp: number;
}

export type FieldErrorProps = {
    formState: FormState;
    name: string;
};