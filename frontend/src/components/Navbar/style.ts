import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Header = styled.header`
   height: ${sizes.header_Height};
   display: flex;
   align-items: center;
   background-color: ${palleteColor.colorPrimary};
`

export const Nav = styled.nav`
`

export const NavFormContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${palleteColor.white};
`

export const MainTitle = styled.h1`
   font-size: ${sizes.mainTitle_Size};
   margin: 0;
   font-weight: ${sizes.mainTitle_Weight};
`

export const ContactContainer = styled.div`
   display: flex;
   align-items: center;
`

export const ContactLink = styled.p`
   margin: 0 0 0 10px;
   font-size: ${sizes.paragraph_Size};
`
