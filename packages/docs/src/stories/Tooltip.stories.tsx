import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@class-ignite-ui/react'
import { ShoppingCart } from "phosphor-react";
import { styled } from "@class-ignite-ui/react/src/styles/index"
import { Box } from '@class-ignite-ui/react';

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    elementText: 'Adicione um texto',
    buttonTriggerAs: <button>Clique aqui</button>
  },
  decorators: [
    (Story) => {
      return(
        <Box>
          {Story()}
        </Box>
      )
    }
  ]
  
} as Meta<TooltipProps>

const ButtonTest = styled('button', {
    all: 'unset',
    borderRadius: '$md',
    backgroundColor: '$gray900',
    padding: '$3',
    lineHeight: 0,
    textAlign: 'center',
    cursor: 'pointer'
})

export const Primary: StoryObj<TooltipProps> = {
    args: {
        elementText: 'Adicione ao carrinho',
        buttonTriggerAs: <ButtonTest><ShoppingCart color='#fff' size={28} /></ButtonTest>
    },
}

