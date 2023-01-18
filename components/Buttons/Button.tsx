import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";


export const buttonStyles = cva(
  'apparence-none py-2 px-4 font-bold uppercase transition   focus:outline focus:outline-4 focus:outline-offset-2 hover:scale-105', 
  {
    variants: {
      color: {
        primary: 'bg-primary-900 text-white focus:outline-primary-900',
        alt: 'bg-alt-900 text-white focus:outline-alt-900',
        outline: 'bg-transparent border-2 border-primary-800   text-primary-800 focus:outline-primary-900',
        'outline-alt': 'bg-transparent border-2 border-alt-800   text-alt-800 focus:outline-alt-900',
      },
      size: {
        xs: 'w-32',
        sm: 'w-48',
        md: 'w-64',
        lg: 'w-72',
        xl: 'w-80',
        full: 'w-full'
      },
      rounded: {
        true: 'rounded-lg'
      }
    },
    defaultVariants: {
      color: "primary",
      size: "full",
      rounded: true,
    }
  }
)

type ButtonProps = VariantProps<typeof buttonStyles> & ButtonHTMLAttributes<HTMLButtonElement>


export interface Props extends ButtonProps{
  text:string,
  type?: 'button'|'submit'|'reset',
}



export default function Button({
  text,
  size,
  color,
  rounded,
  type = 'button',
  ...props  
}: Props) {

 
  
  return (
    
    <button type={type} className={buttonStyles({color, size, rounded})} {...props} >{text}</button>
    
  )
}