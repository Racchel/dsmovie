import React from 'react'

import { Container } from './style'

interface ITitleProps{
  text: string
}

const Title:React.FC<ITitleProps> = (props) => {
   return (
      <Container>{props.text}</Container>
  )
}

export default Title