import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const ScoreValue = styled.p`
   margin: 0;
   color:${palleteColor.orange};
   font-size: ${sizes.paragraph_Size};
   font-weight: ${sizes.paragraph_Weight};
`
export const ScoreCount = styled.p`
   font-size: ${sizes.paragraph_Size};
   color: ${palleteColor.gray};
   margin: 4px 0 10px 0;
`