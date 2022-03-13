import { ButtonHTMLAttributes } from 'react'

export default interface IArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  disabled: boolean
  rotate?: boolean
}
