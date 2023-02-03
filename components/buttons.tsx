import {ReactNode} from "react"

interface ButtonProps {
  children: ReactNode
}

function PrimaryButton({children}: ButtonProps) {
  return (
    <button className="bg-[#3c39e3] rounded-lg text-[#d6d9d2] p-2 text-center">{children}</button>
  )
}

export {PrimaryButton}
