import React from 'react'
import { ReactComponent as StarFull } from 'assets/img/star-full.svg'
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg'
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg'
import {
   Container
} from './style'

interface IStarsProps {
   score: number
}

interface IStarProps {
   fill: number
}

// EX: retorno da função
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
const getFills = (score: number) => {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

const Star:React.FC<IStarProps> = ({ fill }) => {   
   switch (fill) {
      case 0:
         return <StarEmpty />
      case 1:
         return <StarFull />   
      default:
         return <StarHalf />  
   }
}

const Stars:React.FC<IStarsProps> = ({ score }) => {

   const fills = getFills(score)

   return (
      <Container>
         <Star fill={fills[0]} />
         <Star fill={fills[1]} />
         <Star fill={fills[2]} />
         <Star fill={fills[3]} />
         <Star fill={fills[4]} />
     </Container>
  )
}

export default Stars