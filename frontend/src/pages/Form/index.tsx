import React from 'react'
import movies from '../../mocks'
import {
  Container,
  MovieCardImage,
  CardContainer,
  H3,
  FormContent,
  FormGroup,
  Label,
  ButtonContainer,
  Button
} from './style'

export default function Form () {
  return (
    <Container>
      <MovieCardImage src={movies.image} alt={movies.title} />
      <CardContainer>
        <H3>{movies.title}</H3>
        <FormContent>
          <FormGroup className='form-group'>
            <Label htmlFor='email'>Informe seu email</Label>
            <input type='email' className='form-control' id='email' />
          </FormGroup>
          <FormGroup className='form-group'>
            <Label htmlFor='score'>Informe sua avaliação</Label>
            <select className='form-control' id='score'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </FormGroup>
          <ButtonContainer>
            <Button type='submit' className='btn btn-primary dsmovie-btn'>Salvar</Button>
          </ButtonContainer>
        </FormContent>
        <Button className='btn btn-primary mt-3'>Cancelar</Button>
      </CardContainer>
    </Container>
  )
}
