"use client"
import { createMessage } from '@/app/actions/message';
import { SubmitButton } from '@/components/submit-button';
import { EMPTY_FORM_STATE } from '@/lib/constants';
import { useFormState } from 'react-dom';
import { FieldError } from '@/components/errors/field-error';
import { useToastMessage } from '@/hooks/use-toast-message';
import { useFormReset } from '@/hooks/use-form-reset';

export const MessageCreateForm = () => {

    const [formState, formAction] = useFormState(
        createMessage,
        EMPTY_FORM_STATE
    )

    const noScriptFallback = useToastMessage(formState)

    const formRef = useFormReset(formState)

    return (
        <>
            <form ref={formRef} action={formAction} className='w-1/2 flex flex-col gap-y-3' >
                <h1 className='text-2xl font-semibold'>Create a message</h1>

                <label htmlFor='title' className='text-lg font-semibold'>Title</label>
                <input className='p-2 border-2 border-gray-300 text-black rounded-md' id='title' name='title' type='text' placeholder='Enter title' />
                <FieldError formState={formState} name='title' />

                <label htmlFor='text' className='text-lg font-semibold'>Message</label>
                <textarea id='text' name='text' className='p-2 border-2 border-gray-300 text-black rounded-md' placeholder='Enter your message here' />
                <FieldError formState={formState} name='text' />

                <SubmitButton label='Create' loading="Creating..." />

                {noScriptFallback}
            </form>
        </>
    )
}
