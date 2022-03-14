import React from 'react'

import ArrowButton from './Button'

import {
  Container,
  PaginationBox,
  Paragraph
} from './style'

const Pagination:React.FC = () => {
  return (
    <Container>
      <PaginationBox>
        <ArrowButton disabled={true} />
        <Paragraph>{`${1} de ${3}`}</Paragraph>
        <ArrowButton disabled={false} rotate='rotate(180deg);'/>
      </PaginationBox>
    </Container>
  )
}

export default Pagination
