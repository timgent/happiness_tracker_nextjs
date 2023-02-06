import {ReactNode, MouseEventHandler} from "react"

interface ButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

function PrimaryButton({children, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-[#3c39e3] rounded-lg text-[#d6d9d2] p-2 text-center">{children}</button>
  )
}

export {PrimaryButton}
