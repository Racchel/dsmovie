import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.div`
   padding: 15px 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const PaginationBox = styled.div`
   width: 180px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   form {
      width: 100%;
      display: flex;
   }
`

export const Button = styled.button`
   width: 40px;
   height: 40px;
   border-radius: 4px;
   background-color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid var(--color-primary);
   cursor: pointer;

   &:disabled {
      border: 1px solid #c2c2c2;
      cursor: unset;
   }

   &:disabled svg{
      filter: none;
   }

   svg {
      filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
      transform: rotate(180deg);
   }
`

export const Paragraph = styled.p`
   margin: 0;
   font-size: 12px;
   color: var(--color-primary);
`
