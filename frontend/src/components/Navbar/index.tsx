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

export default function Navbar () {
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
