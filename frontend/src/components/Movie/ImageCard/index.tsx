import React, { InputHTMLAttributes } from 'react'
import {
   Image
} from './style'

interface IImageProps extends InputHTMLAttributes<HTMLInputElement> {
  src: string
  alt: string
}

const ImageCard:React.FC<IImageProps> = (props) => {
  return (
    <Image src={props.src} alt={props.alt} />
  )
}


export default ImageCard