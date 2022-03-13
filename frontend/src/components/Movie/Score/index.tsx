import React from 'react'
import { Stars } from '..'

import { 
   Container,
   ScoreValue,
   ScoreCount
} from './style'

const Score:React.FC = () => {
   const score = 3.5
   const count = 13

   return (
      <Container>
         <ScoreValue>{score > 0 ? score.toFixed(1) : '-'}</ScoreValue>
         <Stars />
         <ScoreCount>{count} avaliações</ScoreCount>
      </Container>
   )
}

export default Score