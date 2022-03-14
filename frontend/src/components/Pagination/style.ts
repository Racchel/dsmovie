import styled from 'styled-components'
import { palleteColor } from 'assets/globalStyles'

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
export const Paragraph = styled.p`
   margin: 0;
   font-size: 12px;
   color: ${palleteColor.colorPrimary};
`
