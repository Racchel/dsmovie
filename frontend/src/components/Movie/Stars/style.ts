import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.div`
   width: 130px;
   display: flex;
   justify-content: space-between;

   svg {
      width: ${sizes.star_Size};
      height: auto;
   }
`