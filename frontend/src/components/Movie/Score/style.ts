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
   font-size: 16px;
   font-weight: 700;
`
export const ScoreCount = styled.p`
   font-size: 12px;
   color: ${palleteColor.gray};
   margin: 4px 0 10px 0;
`