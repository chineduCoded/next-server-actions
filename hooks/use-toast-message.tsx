"use client"
import { FormState } from "@/schema/types"
import { useEffect, useRef } from "react"
import toast from "react-hot-toast"

const useToastMessage = (formState: FormState) => {
  const prevTimestamp = useRef(formState.timestamp)

  const showToast = formState.message && formState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    if (showToast) {
      if (formState.status === "ERROR") {
        toast.error(formState.message)
      } else {
        toast.success(formState.message)
      }

      prevTimestamp.current = formState.timestamp
    }
  }, [formState, showToast])

  return (
    <noscript>
      {formState.status === 'ERROR' && (
        <div style={{ color: 'red' }}>{formState.message}</div>
      )}

      {formState.status === 'SUCCESS' && (
        <div style={{ color: 'green' }}>{formState.message}</div>
      )}
    </noscript>
  )
}

export { useToastMessage }