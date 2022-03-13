import React from 'react'
import { ReactComponent as StarFull } from 'assets/img/star-full.svg'
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg'
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg'
import {
   Container
} from './style'

const Stars:React.FC = () => {
   return (
      <Container>
         <StarFull />
         <StarFull />
         <StarFull />
         <StarHalf />
         <StarEmpty />
     </Container>
  )
}

export default Stars