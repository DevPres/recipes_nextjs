import { ButtonTypes, ThemeColor, ThemeColorVariation, ThemeElementSize } from "@/styles/theme";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";


export const buttonStyles = cva(
  'apparence-none py-2 px-4 uppercase transition hover:scale-105 focus:shadow-md font-bold', 
  {
    variants: {
      color: {
        primary: 'bg-primary-900 focus:shadow-primary-500  text-white',
        alt: 'bg-alt-900 focus:shadow-alt-500  text-white',
        outline: 'bg-transparent border-2 border-primary-800 focus:shadow-primary-500  text-primary-800 ',
        'outline-alt': 'bg-transparent border-2 border-alt-800 focus:shadow-alt-500  text-alt-800 ',
        error:'bg-error focus:shadow-error text-white'
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