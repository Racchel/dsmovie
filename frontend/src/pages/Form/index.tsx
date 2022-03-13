import React from 'react'
import movies from '../../mocks'

import { ImageCard, BottomCard, Button, Title } from 'components/Movie'

import {
  Container,
  FormContent,
  FormGroup,
  Label,
  ButtonContainer
} from './style'
import { Link } from 'react-router-dom'


const Form:React.FC = () => {
  return (
    <Container>
      <ImageCard src={movies.image} alt={movies.title} />
      <BottomCard>
        <Title text={movies.title}/>
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
            <Button type='submit' className='btn btn-primary' text='Salvar'/>
          </ButtonContainer>
        </FormContent>
        <Link to='/'>
          <Button className='btn btn-primary mt-3' text='Cancelar'/>
        </Link>
      </BottomCard>
    </Container>
  )
}

export default Form