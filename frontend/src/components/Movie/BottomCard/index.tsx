import React from 'react'

import {
  Container
} from './style'

interface IBottomCardProps {
  children: any
}

const BottomCard:React.FC<IBottomCardProps> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default BottomCard
