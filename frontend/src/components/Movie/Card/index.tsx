import React from 'react'
import movies from 'mocks'

import { 
   Score, 
   ImageCard, 
   Title,
   BottomCard,
   Button
} from '..'

import { Link } from 'react-router-dom'

const Card:React.FC = () => {
  return (
      <>
         <ImageCard src={movies.image} alt={movies.title} />
         <BottomCard>
            <Title text={movies.title}/>
            <Score />
            <Link to={`/form/${movies.id}`}>
               <Button className='btn btn-primary' text='Avaliar'/>
            </Link>
         </BottomCard>
      </>
  )
}

export default Card
