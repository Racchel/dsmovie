import React from 'react'
import { Stars } from '..'

import { 
   Container,
   ScoreValue,
   ScoreCount
} from './style'

interface IScoreProps {
   score: number
   count: number
}

const Score:React.FC<IScoreProps> = ({ score, count }) => {

   return (
      <Container>
         <ScoreValue>{score > 0 ? score.toFixed(1) : '-'}</ScoreValue>
         <Stars score={score} />
         <ScoreCount>{count} avaliações</ScoreCount>
      </Container>
   )
}

export default Score