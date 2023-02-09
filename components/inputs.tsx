import { HTMLInputTypeAttribute } from "react"
export {LabelledTextInput}

interface LabelledInputProps {
  label: string,
  name: string,
  id?: string,
}

function LabelledTextInput({label, name, id}: LabelledInputProps) {
  const inputId = id || name
  return (
  <>
    <label>
      {label}
      <input id={inputId} name={name} type="text"></input>
    </label>
  </>
  )
}
