import { ComponentProps } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { ToastContainer, ToastViewport, GridToast } from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof RadixToast.Provider> {
    title: string
    description: string
    duration: number
    open: boolean
}

export function Toast({duration, alwaysOpen = false, title, description, ...props}: ToastProps) {
    return (
        <RadixToast.Provider duration={duration} swipeDirection="right" {...props}>
            <ToastContainer open={open}> 
                <GridToast>
                    <Text css={{ fontSize: '$xl', fontWeight: '$bold', color: '$white' }} >{title}</Text>
                    <RadixToast.Close asChild>
                        <X size={20}/>
                    </RadixToast.Close>
                </GridToast>
                <Text css={{ fontSize: '$sm', fontWeight: '$regular', color: '$gray200' }} >{description}</Text>
            </ToastContainer>
            <ToastViewport />
        </RadixToast.Provider>
    )
}