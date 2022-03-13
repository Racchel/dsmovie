import React from 'react'
import movies from 'mocks'

import { 
   Score, 
   ImageCard, 
   Title,
   BottomCard,
   Button
} from '..'

import { Container } from './style'

const Card:React.FC = () => {
  return (
      <>
         <ImageCard src={movies.image} alt={movies.title} />
         <BottomCard>
            <Title text={movies.title}/>
            <Score />
            <Button className='btn btn-primary' text='Avaliar'/>
         </BottomCard>
      </>
  )
}

export default Card
