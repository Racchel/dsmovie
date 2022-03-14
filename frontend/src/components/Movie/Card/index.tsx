import React from 'react'

import { 
   Score, 
   ImageCard, 
   Title,
   BottomCard,
   Button
} from '..'

import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'

type Props = {
   movie: Movie
}

function Card ({ movie } : Props )  {
  return (
      <>
         <ImageCard src={movie.image} alt={movie.title} />
         <BottomCard>
            <Title text={movie.title}/>
            <Score />
            <Link to={`/form/${movie.id}`}>
               <Button className='btn btn-primary' text='Avaliar'/>
            </Link>
         </BottomCard>
      </>
  )
}

export default Card
