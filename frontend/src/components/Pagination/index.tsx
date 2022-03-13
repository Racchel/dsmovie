import React from 'react'
import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import './style.css'
import {
  Container,
  PaginationBox,
  Button,
  Paragraph
} from './style'

export default function index () {
  return (
    <Container>
      <PaginationBox>
        <Button disabled className='dsmovie-flip-horizontal'>
          <Arrow />
        </Button>
        <Paragraph>{`${1} de ${3}`}</Paragraph>
        <Button disabled={false} >
          <Arrow />
        </Button>
      </PaginationBox>
    </Container>
  )
}
