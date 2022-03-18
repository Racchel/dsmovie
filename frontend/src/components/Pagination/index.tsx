import React from 'react'
import { MoviePage } from 'types/movie'

import ArrowButton from './Button'

import {
  Container,
  PaginationBox,
  Paragraph
} from './style'

interface IPaginationProps {
  page: MoviePage
  onChange: Function
}

const Pagination:React.FC<IPaginationProps> = ({ page, onChange }) => {

  return (
    <Container>
      <PaginationBox>
        <ArrowButton disabled={page.first} onClick={() => onChange(page.number - 1) } />
        <Paragraph>{`${page.number + 1} de ${page.totalPages}`}</Paragraph>
        <ArrowButton disabled={page.last} onClick={() => onChange(page.number + 1)} rotate='rotate(180deg);'/>
      </PaginationBox>
    </Container>
  )
}

export default Pagination
