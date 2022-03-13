import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'
import IArrowButtonProps from './IArrowButtonProps'

export const Container = styled.button<IArrowButtonProps>`
   width: 40px;
   height: 40px;
   border-radius: 4px;
   background-color: ${palleteColor.white};
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid ${palleteColor.colorPrimary};
   cursor: pointer;

   &:disabled {
      border: 1px solid ${palleteColor.disabledBtn};
      cursor: unset;
   }

   &:disabled svg{
      filter: none;
   }

   svg {
      filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
      transform: ${props => props.rotate ? 'rotate(180deg);' : ''}
   }
`
