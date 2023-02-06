import { keyframes, styled } from "../../styles";

const slideDownAndFade = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-2px)'
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)'
    }
})

const slideUpAndFade = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(2px)'
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)'
    }
})

const slideRightAndFade = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateX(-2px)'
    },
    '100%': {
        opacity: 1,
        transform: 'translateX(0)'
    }
})

const slideLeftAndFade = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateX(2px)'
    },
    '100%': {
        opacity: 1,
        transform: 'translateX(0)'
    }
})

export const TooltipContainer = styled('div', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',

    'svg polygon': {
        fill: '$gray900'
    },

    '&[data-state="delayed-open"][data-side="top"]': {
        animation: `${slideDownAndFade} 200ms`
    },
    '&[data-state="delayed-open"][data-side="right"]': {
        animation: `${slideLeftAndFade} 200ms`
    },
    '&[data-state="delayed-open"][data-side="bottom"]': {
        animation: `${slideUpAndFade} 200ms`
    },
    '&[data-state="delayed-open"][data-side="left"]': {
        animation: `${slideRightAndFade} 200ms`
    }
})