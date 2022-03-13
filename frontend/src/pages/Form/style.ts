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

export const MovieCardImage = styled.img`
   width: 100%;
   border-radius: 8px 8px 0 0;
`

export const CardContainer = styled.div`
   background-color: ${palleteColor.white};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 10px 20px 10px;
   border-radius: 0 0 8px 8px;
`

export const H3 = styled.h3`
   min-height: 40px;
   color: ${palleteColor.darkGray};
   text-align: center;
   font-size: ${sizes.tertiaryTitle_Size};
   font-weight: ${sizes.tertiaryTitle_Weight};
   margin-bottom: 10px;
`
export const Button = styled.button`
   width: ${sizes.button_Width};
   height: ${sizes.button_Height};
   background-color: ${palleteColor.colorPrimary};
   font-size: ${sizes.button_Size};
   font-weight: ${sizes.button_Weight};
   display: flex;
   align-items: center;
   justify-content: center;
`
