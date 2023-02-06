import { styled } from "../../styles";
import * as RadixToast from '@radix-ui/react-toast'

export const ToastContainer = styled(RadixToast.Root, {
    minWidth: '6.25rem',
    width: '22.5rem',
    padding: '$3 $5',
    borderRadius: '$sm',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
    backgroundColor: '$gray800',
    border: 'solid 2px $gray600'
})

export const ToastViewport = styled(RadixToast.Viewport, {
    width: '100vw',
    heigth: '100vh',
    position: 'fixed',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0
})

export const GridToast = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    svg: {
        color: '$gray200',
        width: 'fit-content',
        cursor: 'pointer'
    }
})