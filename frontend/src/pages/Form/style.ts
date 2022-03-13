import styled from 'styled-components'
import { palleteColor, sizes } from 'assets/globalStyles'

export const Container = styled.div`
   max-width: 480px;
   margin: 40px auto;
   padding: 20px;
`

export const FormContent = styled.form`
   width: calc(100% - 20px);
`

export const FormGroup = styled.div`
   margin-bottom: 20px;
`

export const Label = styled.label`
   font-size: ${sizes.label_Size};
   color: ${palleteColor.gray};
`

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
`
