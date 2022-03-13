import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.button`
   width: ${sizes.button_Width};
   height:  ${sizes.button_Height};
   background-color: ${palleteColor.colorPrimary};
   font-size: ${sizes.button_Size};
   font-weight:  ${sizes.button_Weight};
   display: flex;
   align-items: center;
   justify-content: center;
`