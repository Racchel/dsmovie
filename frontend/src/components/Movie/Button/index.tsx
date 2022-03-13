import React, { ButtonHTMLAttributes } from 'react'

import {
  Container
} from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
  className: string
  type?: 'button' | 'submit' 
}

const Button:React.FC<IButtonProps> = (props) => {
  return (
    <Container type={props.type? props.type : 'button'} className={props.className} >
      {props.text}
    </Container>
  )
}

export default Button
