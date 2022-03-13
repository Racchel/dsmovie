import React from 'react'
import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import {
  Header,
  Nav,
  NavFormContent,
  MainTitle,
  ContactContainer,
  ContactLink
} from './style'

const Navbar:React.FC = () => {
  return (
    <Header>
      <Nav className='container'>
        <NavFormContent>
          <MainTitle>DSMOVIE</MainTitle>
          <a href='https://github.com/Racchel'>
            <ContactContainer>
              <GithubIcon />
              <ContactLink>/Racchel</ContactLink>
            </ContactContainer>
          </a>
        </NavFormContent>
      </Nav>
    </Header>
  )
}

export default Navbar