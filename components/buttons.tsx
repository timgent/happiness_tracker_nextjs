import {ReactNode, MouseEventHandler} from "react"

export {PrimaryButton}

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function PrimaryButton({children, onClick=undefined, type=undefined}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className="bg-[#3c39e3] rounded-lg text-[#d6d9d2] p-2 text-center">{children}</button>
  )
}

