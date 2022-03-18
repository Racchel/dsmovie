import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from 'utils/requests'
import { Movie } from 'types/movie'
import { validateEmail } from 'utils/validate'
import { ImageCard, BottomCard, Button, Title } from 'components/Movie'

import {
  Container,
  FormContent,
  FormGroup,
  Label,
  ButtonContainer
} from './style'


type Props = {
  movieId: string
}

function FormCard({ movieId } : Props) {

  const navigate = useNavigate()

  const [movie, setMovie] = useState<Movie>()

  useEffect(() => { 
    axios.get(`${BASE_URL}/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data)
      })
  }, [movieId])

  const handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    const email = (e.target as any).email.value
    const score  = (e.target as any).score.value

    if (!validateEmail(email)) return

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    axios(config).then((response) => {
      navigate('/')
    }) 

  }

  return (
    <Container>
      <ImageCard src={movie?.image} alt={movie?.title} />
      <BottomCard>
        <Title text={movie?.title}/>
        <FormContent onSubmit={handleSubmit}>
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

export default FormCard