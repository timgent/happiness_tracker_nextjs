import { onValidateAndSaveHappy } from "./HappyForm.telefunc"
import { PrimaryButton } from '@/components/buttons'
import { LabelledTextInput } from "@/components/inputs"
import {FormEvent} from "react"

async function validateAndSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const formObject = Object.fromEntries(formData)
  await onValidateAndSaveHappy(formObject)
}

export default function HappyForm() {

  return (
    <>
      <h1 className="text-xl text-black">I'm a modal!!</h1>
      <form onSubmit={validateAndSubmit}>
        <LabelledTextInput label="Text" name="text"/>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </>
  )
}
