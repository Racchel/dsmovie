import React from 'react'
import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import IArrowButtonProps from './IArrowButtonProps'

import {
  Container,
} from './style'

const ArrowButton:React.FC<IArrowButtonProps> = (props) => {
  return (
   <Container {...props}>
      <Arrow />
   </Container>
  )
}

export default ArrowButton
