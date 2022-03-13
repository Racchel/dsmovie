import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.h3`
   min-height: 40px;
   color: ${palleteColor.darkGray};
   text-align: center;
   font-size: ${sizes.tertiaryTitle_Size};
   font-weight: ${sizes.tertiaryTitle_Weight};
   margin-bottom: 10px;
`